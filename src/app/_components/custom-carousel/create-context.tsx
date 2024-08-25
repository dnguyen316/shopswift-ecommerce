import React, { createContext, useContext, useMemo, useState } from "react";

import type { Dispatch, SetStateAction } from "react";
import type { Swiper as SwiperType } from "swiper/types";

export type CustomCarouselContextProps = {
  swiper?: SwiperType;
  setSwiper: Dispatch<SetStateAction<SwiperType | undefined>>;
};

export const CustomCarouselContext = createContext<CustomCarouselContextProps>({
  swiper: undefined,
  setSwiper: () => undefined,
});

export type CustomCarouselProviderProps = {
  children?: React.ReactNode;
};

const CustomCarouselProvider = (props: CustomCarouselProviderProps) => {
  const [swiper, setSwiper] = useState<SwiperType | undefined>(undefined);
  const { children } = props;

  const initValue = useMemo(() => {
    return {
      swiper,
      setSwiper,
    };
  }, [swiper]);

  return (
    <CustomCarouselContext.Provider value={initValue}>
      {children}
    </CustomCarouselContext.Provider>
  );
};

export const useCustomCarousel = () => {
  const context = useContext(CustomCarouselContext);

  if (!context) {
    throw Error("This hook should be used in CustomCarousel Component");
  }

  return context;
};

export default CustomCarouselProvider;
