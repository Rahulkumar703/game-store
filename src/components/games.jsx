import GameCard from "./game-card";
import { P } from "./ui/typography";

const Games = ({ games }) => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6">
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