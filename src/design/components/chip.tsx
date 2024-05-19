import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Chip = ({ children, className, ...props }: ChipProps) => {
  return (
    <div
      className={cn(
        "block whitespace-nowrap rounded-full bg-light-100 px-4 py-3 text-xs text-dark-900",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
