import Link from "next/link";
import Image from "next/image";
import { ProductCategory } from "interfaces";
import styles from "styles/components/CategoryList/CategoryItem.module.scss";

interface CategoryItemProps {
  category: ProductCategory;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { image, slug, name, description } = category;

  // Default image URL - you should add a default image to your public folder
  const defaultImageUrl = "/default-category-image.jpg"; // Add your default image path here

  return (
    <div className={styles.categoryItem}>
      <Link href={`/category/${slug}`} className="relative w-full h-full">
        <Image
          src={image?.sourceUrl || defaultImageUrl}
          alt={image?.altText || name || "Category image"}
          quality={100}
          layout="fill"
          className="clickable-img"
        />
        <div className="absolute py-2 px-3 flex flex-col bottom-4 left-4 bg-white text-black">
          <span className="font-semibold capitalize">{name}</span>
          {description && <span className="text-xs">{description}</span>}
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
