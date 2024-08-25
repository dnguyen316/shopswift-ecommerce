"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}

const SectionWrapper = React.forwardRef<
  HTMLDetailsElement,
  SectionWrapperProps
>(({ className, title, subtitle, children, ...props }, ref) => {
  return (
    <section
      className={cn("container mb-[70px] mt-[70px]", className)}
      ref={ref}
      {...props}
    >
      <div className="mb-6 flex items-center gap-[10px]">
        <span className="bo inline-block h-[40px] w-[20px] rounded-sm bg-secondary-2"></span>
        <h3 className="font-semibold text-secondary-2">{subtitle}</h3>
      </div>
      <h2 className="inline-block text-4xl font-semibold leading-[48px] tracking-wide text-text-2">
        {title}
      </h2>
      {children}
    </section>
  );
});

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
