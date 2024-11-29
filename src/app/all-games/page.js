import { addGame, getAllGames } from "@/action/game";
import GameCard from "@/components/game-card";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";
import { SignedIn } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";

const AllGames = async () => {
  const res = await getAllGames();

  const games = res?.data || [];

  // [
  //   {
  //     title: "Elden Ring",
  //     slug: "elden-ring",
  //     description:
  //       "An action RPG set in a vast open world filled with challenging enemies, epic battles, and stunning environments.",
  //     genre: "RPG",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.5K8vN75_vQXqXT4l6OR_3AHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Fantasy", "Open World", "Action", "Adventure"],
  //     downloadSize: "45GB",
  //     rating: 4.8,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "Call of Duty: Modern Warfare II",
  //     slug: "call-of-duty",
  //     description:
  //       "A high-octane FPS with a gripping campaign and competitive multiplayer modes.",
  //     genre: "FPS",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.11f-IXouGQc1gd_AC8QdQQHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Shooter", "Multiplayer", "Action"],
  //     downloadSize: "120GB",
  //     rating: 4.5,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "The Legend of Zelda: Breath of the Wild",
  //     slug: "the-legend-of-zelda",
  //     description:
  //       "An open-world action-adventure game where you explore the vast kingdom of Hyrule and solve ancient puzzles.",
  //     genre: "Adventure",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP._wgfFq8aDeFxjLHDzNzknAHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Adventure", "Fantasy", "Open World"],
  //     downloadSize: "14.4GB",
  //     rating: 4.9,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "Among Us",
  //     slug: "among-us",
  //     description:
  //       "A party game of teamwork and betrayal as you work together to complete tasks or sabotage the mission.",
  //     genre: "Party",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.3JNp8Om-jc0VpyT0eH7u7AHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Multiplayer", "Social Deduction", "Casual"],
  //     downloadSize: "0.5GB",
  //     rating: 4.3,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "Minecraft",
  //     slug: "minecraft",
  //     description:
  //       "A sandbox game that lets you build, explore, and survive in a blocky, procedurally generated world.",
  //     genre: "Sandbox",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.0L9oSnoLyNKnqNE4jLTUBAHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Creative", "Survival", "Multiplayer"],
  //     downloadSize: "1GB",
  //     rating: 4.7,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "Hollow Knight",
  //     slug: "hollow-knight",
  //     description:
  //       "A challenging and beautifully hand-drawn action platformer set in a mysterious underground world.",
  //     genre: "Action",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.aZ68YiDSQgPiME05BGGOMAHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Metroidvania", "Indie", "Exploration"],
  //     downloadSize: "9GB",
  //     rating: 4.8,
  //     downloadLink: "#",
  //   },
  //   {
  //     title: "Fortnite",
  //     slug: "fortnite",
  //     description:
  //       "A battle royale game where you fight to be the last one standing while building structures to gain an edge.",
  //     genre: "Battle Royale",
  //     coverImage:
  //       "https://th.bing.com/th/id/OIP.qDsFMSalv4w7iwARDdqX2AHaEK?rs=1&pid=ImgDetMain",
  //     tags: ["Shooter", "Multiplayer", "Building"],
  //     downloadSize: "30GB",
  //     rating: 4.6,
  //     downloadLink: "#",
  //   },
  // ].forEach(async (game) => {});

  // await addGame({
  //   title: "Fortnite",
  //   slug: "fortnite",
  //   description:
  //     "A battle royale game where you fight to be the last one standing while building structures to gain an edge.",
  //   genre: "Battle Royale",
  //   coverImage:
  //     "https://th.bing.com/th/id/OIP.qDsFMSalv4w7iwARDdqX2AHaEK?rs=1&pid=ImgDetMain",
  //   tags: ["Shooter", "Multiplayer", "Building"],
  //   downloadSize: "30GB",
  //   rating: 4.6,
  //   downloadLink: "https://www.google.com",
  // });

  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between">
        <H2 className={"border-0"}>All Games</H2>
        <SignedIn>
          <Title content={"Add New Game"} asChild className={""}>
            <Link href="/new-game">
              <Button size="icon">
                <Plus />
              </Button>
            </Link>
          </Title>
        </SignedIn>
      </div>
      <div className="grid grid-cols-2">
        {games.map((game) => {
          return <GameCard {...game} key={game.id} />;
        })}
      </div>
    </section>
  );
};

export default AllGames;
