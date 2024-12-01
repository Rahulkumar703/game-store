import Title from "@/components/title";
import { Button } from "@/components/ui/button";
import { H2 } from "@/components/ui/typography";
import { SignedIn } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import Link from "next/link";

const TopGames = async () => {
  return (
    <section className="flex flex-col">
      <div className="flex items-center justify-between">
        <H2 className={"border-0"}>Top Games</H2>
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
    </section>
  );
};

export default TopGames;
