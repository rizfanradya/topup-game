import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXT_PUBLIC_NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };
        const prisma = new PrismaClient();
        const user = await prisma.admin.findMany();
        if (!user[0].username) throw new Error("email mismatch");
        const passwordMatch = await bcrypt.compare(password, user[0].password);
        if (!passwordMatch) throw new Error("password mismatch");
        return { username: user[0].username, id: user[0].id };
      },
    }),
  ],
  callbacks: {
    jwt(params: any) {
      if (params.user?.username) {
        params.token.username = params.user.username;
        params.token.id = params.user.id;
      }
      return params.token;
    },
    session({ session, token }) {
      if (session.user) {
        (session.user as { id: string }).id = token.id as string;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
