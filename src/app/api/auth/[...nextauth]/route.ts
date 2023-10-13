import adminModel from "@/models/admin";
import { connectMongoDB } from "@/utils/mongo";
import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import { NextApiHandler, NextApiRequest, NextApiResponse } from "next";

export const authOptions: NextAuthOptions = {
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
        await connectMongoDB();
        const user = await adminModel.findOne({ username });
        if (!user) throw new Error("email mismatch");
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) throw new Error("password mismatch");
        return { username: user.username, id: user.id, role: user.role };
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

const handler: NextApiHandler = (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, authOptions);
};

export { handler as GET, handler as POST };