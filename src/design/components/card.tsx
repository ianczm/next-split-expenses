import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 rounded-xl border border-glass-border/5 bg-glass-primary/30 p-5 shadow-dark-900 drop-shadow-xl backdrop-blur-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
