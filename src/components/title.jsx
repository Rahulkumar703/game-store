import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

const Title = ({ children, content, asChild = false, className }) => {
  return (
    <Tooltip>
      <TooltipTrigger
        asChild={asChild}
        className={cn(
          "cursor-default text-ellipsis line-clamp-2 text-left",
          className
        )}
      >
        {children}
      </TooltipTrigger>
      <TooltipContent>
        <p className="max-w-48 text-center">{content}</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default Title;
