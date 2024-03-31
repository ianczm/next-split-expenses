import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface DividerProps extends HTMLAttributes<HTMLDivElement> {}

export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <div className={cn("block h-[1px] w-full", className)} {...props}></div>
  );
};
