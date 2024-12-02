import NewGameForm from "@/components/new-game-form"
import { H1 } from "@/components/ui/typography"

export default function NewGame() {
    return (
        <section className="container flex flex-col mx-auto bg-background">
            <H1 className="text-2xl font-bold mb-5">Add New Game</H1>
            <NewGameForm />
        </section>
    )
}

