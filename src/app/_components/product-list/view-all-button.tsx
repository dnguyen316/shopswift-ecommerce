import { forwardRef, useRef, useImperativeHandle } from "react";
import Link, { type LinkProps } from "next/link";
import { Button } from "@/app/components/ui/button";

const ViewAllButton = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ href, ...props }, ref) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(
      ref,
      () => buttonRef.current as unknown as HTMLAnchorElement,
    );

    return (
      <Link
        className="absolute right-7 top-[56px]"
        href={href}
        passHref
        {...props}
      >
        <Button className="h-[56px] w-[159px]" ref={buttonRef}>
          View All
        </Button>
      </Link>
    );
  },
);

ViewAllButton.displayName = "ViewAllButton";

export default ViewAllButton;
