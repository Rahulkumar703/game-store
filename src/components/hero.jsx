import { getTopGames } from "@/action/game";
import Carousel from "./carousel";
import GameCard from "./game-card";


const Hero = async () => {
  const res = await getTopGames();
  const topGames = res.data || [];

  return (
    <section className="grid grid-cols-2 gap-4 overflow-x-hidden">
      <Carousel slides={topGames} className="col-span-2 w-full" />
      <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} />
      <div className="flex flex-col gap-2">
        <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} size={"list"} className="h-1/2" />
        <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} size={"list"} className="h-1/2" />
      </div>
    </section>
  );
};

export default Hero;
