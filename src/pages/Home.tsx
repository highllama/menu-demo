import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryTabs from "../components/ui/CategoryTabs";
import StickyCategoryPills from "../components/ui/StickyCategoryPills";
import PromoBanner from "../components/ui/PromoBanner";
import FoodCard from "@/components/molecules/FoodCard";
import FoodDetailsSheet, {
  type FoodItem,
} from "@/components/molecules/FoodDetailsSheet";
import useCartStore from "../providers/cartStore";
import "./Home.css";
// import extraCategories from "../data/categoriesWithProducts";
import { useMenuProvider } from "../providers/MenuProvider/useMenuProvider";
import formatPrice from "@/utils/formatPrice";
import useLikedProducts from "@/hooks/useLikedProducts";

const Home: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<FoodItem | null>(null);
  const cartCount = useCartStore((s) => s.cart.length);
  const hasCart = cartCount > 0;
  const { menu } = useMenuProvider();
  const featuredProducts = menu?.products?.filter((p) => p?.featured) ?? [];
  const { likedProducts, toggleLikedProduct } = useLikedProducts();
  const likedProductsData = menu?.products?.filter((p) =>
    likedProducts.includes(p.id),
  );
  console.log(likedProducts, "likes");
  console.log(menu);

  useEffect(() => {
    if (menu?.theme) {
      document.documentElement.style.setProperty(
        "--primary-color",
        menu.theme.primaryColor,
      );
    }
  }, [menu?.theme]);

  return (
    <div
      className="home-container"
      style={hasCart ? { paddingBottom: "130px" } : undefined}
    >
      {/* Special Offers Section */}
      <section className="section">
        {/* <div className="section-header" style={{ marginTop: "2rem" }}>
          <h3>Ofertas Especiales</h3>
        </div> */}
        <PromoBanner
          title={menu?.banner?.title ?? ""}
          discount={menu?.banner?.subtitle ?? ""}
          image={menu?.banner?.files?.at(0)?.url ?? ""}
        />
      </section>

      {/* Categories */}
      <CategoryTabs />

      {/* Special Deals Section */}
      {featuredProducts?.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h3>Destacados</h3>
            {/* <NavLink to="/recommended" className="see-all-link">
            Ver todo
          </NavLink> */}
          </div>
          <div className="horizontal-scroll-container hide-scrollbar">
            <div className="deals-list">
              {featuredProducts.map((product) => (
                <FoodCard
                  disabled={product?.oos}
                  key={product.id}
                  id={product.id}
                  title={product.name}
                  price={formatPrice(product.price)}
                  description={product.description}
                  kcal={product.kcal}
                  image={product?.files?.at(0)?.url}
                  isFavorite={likedProducts.includes(product.id)}
                  onCardClick={setSelectedItem}
                  onFavoriteClick={() => toggleLikedProduct(product.id)}
                  oos={product?.oos}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Liked Products Section */}
      {likedProductsData?.length > 0 && (
        <section className="section">
          <div className="section-header">
            <h3>Tus Favoritos</h3>
            {/* <NavLink to="/recommended" className="see-all-link">
            Ver todo
          </NavLink> */}
          </div>
          <div className="horizontal-scroll-container hide-scrollbar">
            <div className="deals-list">
              {likedProducts
                .map((id) => menu?.products?.find((p) => p.id === id))
                .filter((product) => product !== undefined)
                .map((product) => (
                  <FoodCard
                    disabled={product?.oos}
                    key={product.id}
                    id={product.id}
                    title={product.name}
                    price={formatPrice(product.price)}
                    description={product.description}
                    kcal={product.kcal}
                    image={product?.files?.at(0)?.url}
                    isFavorite={likedProducts.includes(product.id)}
                    onCardClick={setSelectedItem}
                    onFavoriteClick={() => toggleLikedProduct(product.id)}
                    oos={product?.oos}
                  />
                ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Sections */}
      {menu?.productsByCategory
        ?.filter((cat) => cat?.products?.length > 0)
        .map((cat) => (
          <section className="section" id={cat.id} key={cat.id}>
            <div className="section-header">
              <h3>{cat.name}</h3>
            </div>
            <div className="vertical-list">
              {cat?.products?.map((item) => (
                <FoodCard
                  disabled={item?.oos}
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  price={formatPrice(item.price)}
                  description={item.description}
                  kcal={item.kcal}
                  image={item?.files?.at(0)?.url}
                  variant="horizontal"
                  onCardClick={setSelectedItem}
                  onFavoriteClick={() => toggleLikedProduct(item.id)}
                  oos={item?.oos}
                  isFavorite={likedProducts.includes(item.id)}
                />
              ))}
            </div>
          </section>
        ))}

      <StickyCategoryPills />

      {/* Food Details Bottom Sheet */}
      <FoodDetailsSheet
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
};

export default Home;
