import GameCard from "./game-card";
import { P } from "./ui/typography";

const Games = ({ games }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-6">
            {games.length
                ?
                games.map((game) => {
                    return <GameCard {...game} key={game.id} />;
                })
                :
                <P className={'text-destructive text-center col-span-4 mt-10'}>No games found</P>
            }
        </div>
    )
}

export default Games