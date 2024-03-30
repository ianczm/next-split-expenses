import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface Heading1Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export const Heading1 = ({ children, className, ...props }: Heading1Props) => {
  return (
    <h1
      className={cn(
        "text-4xl font-extrabold leading-tight tracking-tighter",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

interface Heading2Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export const Heading2 = ({ children, className, ...props }: Heading2Props) => {
  return (
    <h1
      className={cn(
        "text-2xl font-extrabold leading-tight tracking-tighter",
        className,
      )}
      {...props}
    >
      {children}
    </h1>
  );
};

interface Heading3Props extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export const Heading3 = ({ children, className, ...props }: Heading3Props) => {
  return (
    <h3 className={cn("text-base leading-tight", className)} {...props}>
      {children}
    </h3>
  );
};

interface TextUIProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

export const TextUI = ({ children, className, ...props }: TextUIProps) => {
  return (
    <span
      className={cn("text-xs font-medium leading-none", className)}
      {...props}
    >
      {children}
    </span>
  );
};

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

export const Paragraph = ({
  children,
  className,
  ...props
}: ParagraphProps) => {
  return (
    <p className={cn("text-xs leading-normal", className)} {...props}>
      {children}
    </p>
  );
};
