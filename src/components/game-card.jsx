import { cva } from "class-variance-authority";
import {
  Card,
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
  description,
  genre,
  coverImage,
  tags,
  downloadSize,
  rating,
  downloadLink,
  size,
}) => {
  if (size === "icon") {
    return (
      <Card className={""}>
        <CardHeader>
          <Image
            src={coverImage}
            width={300}
            height={300}
            alt={title}
            className="object-cover w-16 h-16 rounded-md"
          />
        </CardHeader>
        <Link href={downloadLink} download={true}>
          <Button size={"icon"}>
            <Download />
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <Image src={coverImage} width={300} height={300} alt={title} />
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex items-center justify-between">
        <div className="flex items-center">
          <Ratings rating={rating} />
          <Muted>{rating}</Muted>
        </div>
        <Link href={downloadLink} download={true}>
          <Button size={"icon"}>
            <Download />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default GameCard;
