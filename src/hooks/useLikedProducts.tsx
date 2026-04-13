import { useEffect, useState } from "react";
import localforage from "localforage";
import { useSearchParams } from "react-router-dom";

const useLikedProducts = () => {
  const [likedProducts, setLikedProducts] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const storeSlug = searchParams.get("s");
  console.log(likedProducts);
  useEffect(() => {
    localforage.getItem(`likedProducts-${storeSlug}`).then((likedProducts) => {
      if (likedProducts) {
        setLikedProducts(likedProducts);
      }
    });
  }, []);

  useEffect(() => {
    localforage.setItem(`likedProducts-${storeSlug}`, likedProducts);
  }, [likedProducts]);

  const toggleLikedProduct = (productId: string) => {
    setLikedProducts((prevLikedProducts) =>
      prevLikedProducts.includes(productId)
        ? prevLikedProducts.filter((id) => id !== productId)
        : [...prevLikedProducts, productId],
    );
  };

  return { likedProducts, toggleLikedProduct };
};

export default useLikedProducts;
