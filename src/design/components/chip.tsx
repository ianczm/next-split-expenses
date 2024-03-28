import { cn } from "@/utils/tailwind";
import { HTMLAttributes, ReactNode } from "react";

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Chip = ({ children, className, ...props }: ChipProps) => {
  return (
    <div
      className={cn(
        "bg-light-100 text-dark-900 block rounded-full px-4 py-3 text-xs",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
