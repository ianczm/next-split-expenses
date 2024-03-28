import { cn } from "@/utils/tailwind";
import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

export const Card = ({ children, className, ...props }: CardProps) => {
  return (
    <div
      className={cn(
        "bg-glass-primary/30 shadow-dark-900 border-glass-border/5 flex flex-col gap-4 rounded-xl border p-5 drop-shadow-xl backdrop-blur-2xl",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
