import { addGame, getAllGames } from "@/action/game";
import GameCard from "@/components/game-card";
import Games from "@/components/games";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { H2, P } from "@/components/ui/typography";
import { SignedIn } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";


export const metadata = {
  title: 'All Games | Yono Game Store',
  description: 'Yono Game Store has a vast and popular games collection.',
}


const AllGames = async () => {
  const res = await getAllGames();

  const games = res?.data || [];

  return (
    <section className="container mx-auto bg-background flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <H2 className={"border-0"}>All Games</H2>
        <SignedIn>
          <Title content={"Add New Game"} asChild className={""}>
            <Link href="/new-game">
              <Button size="sm">
                <Plus />
              </Button>
            </Link>
          </Title>
        </SignedIn>
      </div>
      <Games games={games} />
    </section>
  );
};

export default AllGames;
