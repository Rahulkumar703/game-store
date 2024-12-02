import GameCard from "./game-card";
import { H3 } from "./ui/typography";

const Games = ({ games }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {games.length
                ?
                games.map((game) => {
                    return <GameCard {...game} key={game.id} />;
                })
                :
                <H3 className={'text-destructive text-center col-span-4 mt-10'}>No games found</H3>
            }
        </div>
    )
}

export default Games