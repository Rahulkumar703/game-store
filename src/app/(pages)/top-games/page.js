import { getTopGames } from "@/action/game";
import Games from "@/components/games";
import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";
import { SignedIn } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: 'Top Games | Yono Game Store',
  description: 'Yono Game Store\'s Top Yono Games that has been downloaded.',
}


const TopGames = async () => {

  const res = await getTopGames();

  const games = res?.data || [];

  return (
    <section className="container mx-auto bg-background flex flex-col gap-10">
      <div className="flex items-center justify-between">
        <H2 className={"border-0"}>Top Games</H2>
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

export default TopGames;
