import { promotionBannerData } from "../__mocks__/promotion-banner";
import PromotionBanner from "../promotion-banner/promotion-banner";
import SectionWrapper from "./section-wrapper";

const BannerSection = () => {
  return (
    <SectionWrapper>
      <PromotionBanner data={promotionBannerData} />
    </SectionWrapper>
  );
};

export default BannerSection;
