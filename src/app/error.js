'use client'

import { Button } from "@/components/ui/button"
import { H3 } from "@/components/ui/typography"

const Error = ({ error, reset }) => {
    console.log(error)
    return (
        <section className="container flex flex-col gap-4 items-center justify-center h-[calc(100vh-125.8px)]">
            <H3 className={'text-destructive'}>
                {error.message}
            </H3>
            <Button onClick={reset}>
                Try Again
            </Button>
        </section>
    )
}

export default Error