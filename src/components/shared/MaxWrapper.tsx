import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface MaxWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function MaxWrapper({ children, className }: MaxWrapperProps) {
  return (
    <div className={cn("max-w-[1616px] mx-auto w-full", className)}>
      {children}
    </div>
  );
}
