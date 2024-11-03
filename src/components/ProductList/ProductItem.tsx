import Link from "next/link";
import Image from "next/image";
import { Product } from "interfaces";
import styles from "styles/components/ProductList/ProductItem.module.scss";
import classNames from "classnames";

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  // Default image URL - you should add a default image to your public folder
  const defaultImageUrl = "/default-product-image.jpg"; // Add your default image path here

  return (
    <div className={styles.productItem}>
      <Link href={`/product/${product.slug}`} className="relative w-full h-full">
        <div className="w-full h-64 md:mb-4 mb-2 overflow-hidden relative">
          <Image
            src={product?.image?.sourceUrl || defaultImageUrl}
            alt={product?.image?.altText || product.name || "Product image"}
            quality={100}
            layout="fill"
            className="clickable-img"
          />
        </div>
      </Link>
      <Link href={`/product/${product.slug}`} className="relative w-full h-full">
        <div className="w-full px-1 flex flex-col items-center">
          <h3 className="text-lg uppercase font-medium text-center mb-3">
            {product.name}
          </h3>
          <div className="flex items-center flex-col">
            <span
              className={classNames("text-base mb-1", {
                "line-through text-gray-400": product.onSale,
                "mr-3 text-gray-900": !product.onSale
              })}
            >
              {product.regularPrice ?? product.price}
            </span>
            {product.onSale && (
              <span className="text-base text-red-600">
                NOW {product.salePrice}
              </span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductItem;
