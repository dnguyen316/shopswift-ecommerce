import CategoriesList from "../categories-list/categories-list";
import SectionWrapper from "./section-wrapper";

const CategorySection = () => {
  return (
    <SectionWrapper
      className="relative"
      title="Browse By Category"
      subtitle="Category"
    >
      <CategoriesList />
    </SectionWrapper>
  );
};

export default CategorySection;
