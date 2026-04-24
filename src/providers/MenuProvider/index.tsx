import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useStoreSlug from "../../hooks/useStoreSlug";

export const MenuContext = React.createContext<MenuContextType | null>(null);

interface MenuProviderProps {
  children: React.ReactNode;
}

interface MenuContextType {
  menu: Menu;
  setMenu: (menu: any) => void;
}

interface Menu {
  banner: {
    files: {
      url: string;
    }[];
    title: string;
    subtitle: string;
  };
  categories: {
    id: string;
    name: string;
    files: {
      url: string;
    }[];
  }[];
  products: {
    id: string;
    name: string;
    description: string;
    price: number;
    files: {
      url: string;
    }[];
  }[];
}

const MenuProvider = ({ children }: MenuProviderProps) => {
  const [menu, setMenu] = useState<any>(null);
  const storeId = useStoreSlug();
  const [searchParams] = useSearchParams();
  const editData = searchParams.get("jsonMenu");
  const location = searchParams.get("l");
  const URL = import.meta.env.VITE_CLOUDFRONT_PUBLIC;

  const getMenu = async (storeId: string) => {
    const response = await fetch(`${URL}/${storeId}/menu.json`);
    const data = await response.json();
    return data;
  };

  const getMenuStock = async (storeId: string, locationId: string) => {
    const response = await fetch(`${URL}/${storeId}/stocks/${locationId}`);
    const data = await response.json();
    return data;
  };

  function groupProductsByCategory(products: any[], categories: any[]) {
    const productsByCategory = categories.map((category) => {
      const p = products.filter((product) =>
        product?.categories?.some((c: any) => c.id === category.id),
      );
      return { ...category, products: p };
    });
    return productsByCategory;
  }

  useEffect(() => {
    const loadData = async () => {
      if (!storeId) return;
      let promises = [getMenu(storeId)];
      if (location) {
        promises.push(getMenuStock(storeId, location));
      }
      const [data, stock] = await Promise.all(promises);
      if (stock?.products) {
        data.products = data.products.filter((product) => {
          const stockProduct = stock.products.find(
            (s: any) => s.id === product.id,
          );
          return stockProduct?.available;
        });
      }
      const productsByCategory = groupProductsByCategory(
        data.products,
        data.categories,
      );
      setMenu({ ...data, productsByCategory });
    };
    loadData();
  }, [storeId, location]);

  useEffect(() => {
    if (!editData) return;
    try {
      const data = JSON.parse(atob(editData));
      const productsByCategory = groupProductsByCategory(
        data.products,
        data.categories,
      );
      setMenu({ ...data, productsByCategory });
    } catch (error) {
      console.error(error);
    }
  }, [editData]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
