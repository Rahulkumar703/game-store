import { getTopGames } from "@/action/game";
import Carousel from "./carousel";
import GameCard from "./game-card";
import { H3 } from "./ui/typography";


const Hero = async () => {
  const res = await getTopGames();
  const topGames = res?.data || [];

  if (!topGames.length) {
    return <section className="container flex flex-col gap-4 items-center justify-center h-[calc(100vh-125.8px)]">
      <H3 className={'text-destructive'}>No Games Found</H3>
    </section>
  }

  return (
    <section className="container mx-auto bg-background grid grid-cols-2 gap-4 overflow-x-hidden">
      <Carousel slides={topGames} className="col-span-2 w-full" />
      <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} className={'h-full'} />
      <div className="flex flex-col gap-2">
        <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} size={"list"} />
        <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} size={"list"} />
        <GameCard {...topGames[Math.floor(Math.random() * (topGames.length - 1))]} size={"list"} />
      </div>
    </section>
  );
};

export default Hero;
