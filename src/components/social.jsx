import { Instagram, Linkedin, WheatIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Title from "./title"


const SocialIcons = () => {
    return (
        <section className="flex flex-col justify-center gap-3 fixed right-2 top-1/2 -translate-y-1/2 z-20 ">
            <Title content={'Join Whatsapp'} asChild className={'cursor-pointer'}>
                <Link href={'https://whatsapp.com'} className="hover:bg-background hover:scale-105 transition p-2 border backdrop-blur-md rounded-md shadow-xl bg-background/50">
                    <Image src={'/svg/whatsapp.svg'} width={30} height={30} alt="whatsapp" />
                </Link>
            </Title>
            <Title content={'Join Telegram'} asChild className={'cursor-pointer'}>
                <Link href={'https://telegram.com'} className="hover:bg-background hover:scale-105 transition p-2 border backdrop-blur-md rounded-md shadow-xl bg-background/50">
                    <Image src={'/svg/telegram.svg'} width={30} height={30} alt="whatsapp" />

                </Link>
            </Title>
        </section>
    )
}

export default SocialIcons