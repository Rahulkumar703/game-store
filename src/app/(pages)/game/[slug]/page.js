import { getGame, getMetaData } from "@/action/game";
import { H1, Muted, P } from "@/components/ui/typography";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Download, Star, Eye, Tag, HardDrive, Code2, Calendar } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export const generateMetadata = async ({ params }) => {
    const slug = (await params)?.slug;

    const res = await getMetaData(slug);

    if (!res?.data)
        return {
            title: 'Game not Found.',
            description: 'Game not Found.',
        }

    return {
        title: res.data.title,
        description: res.data.description,
    }

}

const Game = async ({ params }) => {

    const slug = (await params)?.slug;

    const res = await getGame(slug);

    if (res?.data) {
        const {
            id,
            title,
            description,
            genre,
            coverImage,
            tags,
            downloadSize,
            rating,
            downloads,
            downloadLink,
            views,
            version,
            createdAt
        } = res.data;

        return (
            <section className="container mx-auto bg-background relative">
                {/* Cover Image and Title */}
                <div className="flex items-start flex-col gap-6">
                    <Image
                        src={coverImage}
                        width={1024}
                        height={320}
                        quality={100}
                        alt={title}
                        className="w-full max-h-80 aspect-video object-cover rounded-md shadow-lg"
                    />
                    <div className="sticky top-20">
                        <H1 className="text-primary">{title}</H1>
                        <P className="text-secondary-foreground">{description}</P>
                    </div>

                    {/* Added On */}
                    <Badge>{genre}</Badge>
                    <Muted className={'-mt-3 ml-auto'}>Added on: {new Date(createdAt).toLocaleDateString('en-IN')}</Muted>
                </div>

                {/* Game Details */}
                <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 mt-6 p-6 rounded-md shadow-md">
                    {/* Downloads */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <Download className="text-green-500 w-6 h-6" />
                        <span className="text-lg font-semibold">{downloads.toLocaleString()} Downloads</span>
                    </div>
                    {/* Rating */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <Star className="text-yellow-500 w-6 h-6" />
                        <span className="text-lg font-semibold">{rating} Rating</span>
                    </div>
                    {/* Views */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <Eye className="text-blue-500 w-6 h-6" />
                        <span className="text-lg font-semibold">{views.toLocaleString()} Views</span>
                    </div>
                    {/* Tags */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <Tag className="text-purple-500 w-6 h-6" />
                        <span className="text-lg font-semibold">
                            {tags.map((tag, index) => (
                                <span key={index} className="text-sm text-primary">
                                    {tag.name}
                                    {index < tags.length - 1 ? ', ' : ''}
                                </span>
                            ))}
                        </span>
                    </div>
                    {/* Size */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <HardDrive className="text-sky-500 w-6 h-6" />
                        <span className="text-lg font-semibold">{downloadSize}</span>
                    </div>
                    {/* Version */}
                    <div className="flex gap-4 items-center p-6 bg-gray-100 rounded-md shadow-sm">
                        <Code2 className="text-orange-500 w-6 h-6" />
                        <span className="text-lg font-semibold">Version {version}</span>
                    </div>

                    <Link href={downloadLink} className="col-span-2" target="_blank">
                        <Button className='flex items-center gap-2 w-full h-16'>
                            <Download className="w-6 h-6" />
                            Download {title}
                        </Button>
                    </Link>
                </div>


            </section>
        );
    };

    return notFound();

}

export default Game