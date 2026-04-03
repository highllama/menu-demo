import { useContext } from "react";
import { MenuContext } from "./index";

export const useMenuProvider = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuProvider must be used within a MenuProvider");
  }
  return context;
};
