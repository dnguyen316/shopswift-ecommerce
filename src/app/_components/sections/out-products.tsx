import ProductList from "../product-list/product-list";
import SectionWrapper from "./section-wrapper";

const OurProductSection = () => {
  return (
    <SectionWrapper
      className="relative"
      title="Explore Our Products"
      subtitle="Our Products"
    >
      <ProductList />
    </SectionWrapper>
  );
};

export default OurProductSection;
