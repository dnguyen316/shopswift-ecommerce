import { forwardRef } from "react";
import { Button } from "@/app/components/ui/button";

const MoveToBagButton = forwardRef(
  ({
    action = () => {
      console.log("clicked");
    },
  }: {
    action?: () => void;
  }) => {
    return <Button onClick={action}>View All</Button>;
  },
);

export default MoveToBagButton;

MoveToBagButton.displayName = "MoveToBagButton";
