import ProductList from "../product-list/product-list";
import SectionWrapper from "./section-wrapper";

const BestSellerSection = () => {
  return (
    <SectionWrapper
      className="relative"
      title="Best Selling Products"
      subtitle="This Month"
    >
      <ProductList />
    </SectionWrapper>
  );
};

export default BestSellerSection;
