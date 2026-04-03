import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
  const [searchParams] = useSearchParams();
  const storeId = searchParams.get("storeId");
  const getMenu = async (storeId: string) => {
    const response = await fetch(
      `https://kalendu-stores-public.s3.us-west-2.amazonaws.com/${storeId}/menu.json`,
    );
    const data = await response.json();
    const productsByCategory = data.categories.map((category) => {
      const products = data.products.filter((product) =>
        product?.categories?.some((c: any) => c.id === category.id),
      );
      return { ...category, products };
    });
    setMenu({ ...data, productsByCategory });
  };

  useEffect(() => {
    if (!storeId) return;
    getMenu(storeId);
  }, [storeId]);

  return (
    <MenuContext.Provider value={{ menu, setMenu }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuProvider;
