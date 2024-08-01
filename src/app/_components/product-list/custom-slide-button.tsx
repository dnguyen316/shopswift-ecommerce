import { Button } from "@/app/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

type CustomSlideButtonProps = {
  onSlideNext?: () => void;
  onSlidePrev?: () => void;
};

const CustomSlideButton = (props: CustomSlideButtonProps) => {
  const { onSlideNext, onSlidePrev } = props;
  return (
    <div className="absolute right-0 top-0">
      <Button
        className="mr-2 h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={onSlidePrev}
        disabled={!onSlidePrev}
      >
        <ArrowLeft size={24} />
      </Button>
      <Button
        className="h-[46px] w-[46px] rounded-full bg-secondary p-0 text-button hover:bg-secondary hover:shadow-md focus:border-2"
        onClick={onSlideNext}
        disabled={!onSlideNext}
      >
        <ArrowRight size={24} />
      </Button>
    </div>
  );
};

export default CustomSlideButton;
