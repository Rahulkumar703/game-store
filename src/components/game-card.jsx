import { cva } from "class-variance-authority";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Ratings from "./ratings";
import { Muted } from "./ui/typography";
import { Button } from "./ui/button";
import { Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "./ui/badge";
import Title from "./title";
import { cn, formatDownload } from "@/lib/utils";

const cardVariants = cva("flex", {
  variants: {
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const GameCard = ({
  title,
  slug,
  description,
  genre,
  coverImage,
  tags,
  downloads,
  downloadSize,
  rating,
  downloadLink,
  size,
  className,
}) => {
  if (size === "list") {
    return (
      <Link href={`/game/${slug}`}>
        <Card className={cn("flex flex-col", className)}>
          <CardHeader className="flex-row gap-3 items-center">
            <Image
              src={coverImage}
              width={100}
              height={100}
              alt={title}
              className="w-14 h-14 object-cover rounded-md"
            />
            <div className="">
              <CardTitle>
                <Title content={title} className="line-clamp-1 leading-8">
                  {title}
                </Title>
              </CardTitle>
              <CardDescription>
                <Title content={description}>{description}</Title>
              </CardDescription>
            </div>
          </CardHeader>

          <CardFooter className="flex items-center justify-between flex-wrap gap-2 mt-auto">
            <div className="flex gap-2 items-center">
              <Ratings rating={rating} />
              <Muted>{rating}</Muted>
            </div>
            <Link
              href={downloadLink}
              download={true}
              className="md:w-auto w-full"
            >
              <Button className="w-full">
                <Download />
                <span>
                  Download &nbsp;
                  <span className="text-red-400 font-sans text-sm">
                    ({downloadSize})
                  </span>
                </span>
              </Button>
            </Link>
          </CardFooter>
        </Card>
      </Link>
    );
  }

  if (size === "slide") {
    return (
      <Link href={`/game/${slug}`}>
        <Card className={cn("flex flex-col p-0 select-none group", className)}>
          <CardHeader className="shrink-0 w-full flex items-center justify-center relative overflow-hidden">
            <Image
              src={coverImage}
              width={1000}
              height={384}
              alt={title}
              className="object-fill aspect-video w-full h-full max-h-96 rounded-lg shrink-0"
            />

            <div className="flex flex-col gap-2 items-start absolute bottom-6 h-[calc(100%-48px)] translate-y-[calc(100%+48px)] group-hover:translate-y-0 transition w-[calc(100%-48px)] p-6 bg-black/20 backdrop-blur-lg rounded-lg ">
              <CardTitle>
                <Title content={title} className="line-clamp-1 text-red-500">
                  {title}
                </Title>
              </CardTitle>
              <CardDescription>
                <Title
                  content={description}
                  className="line-clamp-2 text-red-200 leading-1"
                >
                  {description}
                </Title>
              </CardDescription>
              <Badge variant={'secondary'}>{genre}</Badge>
              <div className="flex gap-2 items-center">
                <Ratings rating={rating} />
                <Muted className={"text-gray-200"}>{rating}</Muted>
              </div>
            </div>
          </CardHeader>
        </Card>
      </Link>
    );
  }

  return (
    <Link href={`/game/${slug}`}>
      <Card className={cn("flex items-center flex-wrap", className)}>
        <CardHeader className="shrink-0 w-full flex items-center justify-center">
          <Image
            src={coverImage}
            width={300}
            height={300}
            alt={title}
            className="object-cover w-full h-full max-h-60 rounded-md shrink-0"
          />
        </CardHeader>
        <div className="space-y-2 flex-1">
          <CardContent className="py-0">
            <CardTitle>
              <Title content={title} className="line-clamp-1 leading-8">
                {title}
              </Title>
            </CardTitle>
            <CardDescription>
              <Title content={description}>{description}</Title>
            </CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-6">
            <Badge>{genre}</Badge>
            <div className="flex w-full gap-2 items-center">
              <Ratings rating={rating} />
              <Muted>{rating}</Muted>
              <div className="flex ml-auto items-center text-muted-foreground gap-1">
                <Download className="w-3 h-3" />
                {formatDownload(downloads)}
              </div>
            </div>
            <Link href={downloadLink} download={true} className="w-full block">
              <Button className="w-full flex items-center">
                <Download />
                <span>
                  Download &nbsp;
                  <span className="text-red-400 font-sans text-sm">
                    ({downloadSize})
                  </span>
                </span>
              </Button>
            </Link>
          </CardFooter>
        </div>
      </Card>
    </Link>
  );
};

export default GameCard;
