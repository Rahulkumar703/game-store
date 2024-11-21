import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

const Title = ({ children, content, asChild = false, className }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          asChild={asChild}
          className={cn(
            "cursor-default text-ellipsis line-clamp-2 w-full text-left",
            className
          )}
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>
          <p className="max-w-48 text-center">{content}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Title;
