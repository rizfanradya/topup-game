import NavbarBottom from "@/components/NavbarBottom";
import NavbarTop from "@/components/navbarTop";

const AllGames = () => {
  return (
    <div>
      <NavbarTop
        onAllGames={undefined}
        onHome={undefined}
        activeHome={undefined}
        activeAllGames={undefined}
      />
      AllGames
      <NavbarBottom />
    </div>
  );
};

export default AllGames;
