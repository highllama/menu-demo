import { useSearchParams } from "react-router-dom";

const useStoreSlug = () => {
  const [searchParams] = useSearchParams();
  const storeSlug = searchParams.get("s");
  return storeSlug;
};

export default useStoreSlug;
