import { Button } from "@/components/ui/button"
import { H3 } from "@/components/ui/typography"
import { Home } from "lucide-react"
import Link from "next/link"

const Error404 = () => {
    return (
        <section className="flex flex-col gap-4 items-center justify-center h-[calc(100vh-125.8px)]">

            <H3 className={'text-destructive'}>
                Error 404: Page Not Found
            </H3>
            <Link href="/">
                <Button variant={'outline'}>
                    <Home className="w-4 h-4 mr-2" />
                    Go Home
                </Button>
            </Link>
        </section>
    )
}

export default Error404