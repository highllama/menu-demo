import { useSearchParams } from "react-router-dom";

const useStoreSlug = () => {
  const [searchParams] = useSearchParams();
  const subDomain = window.location?.hostname?.split(".")?.at(0);
  const storeSlug =
    subDomain !== "localhost" ? subDomain : searchParams.get("s");
  return storeSlug;
};

export default useStoreSlug;
