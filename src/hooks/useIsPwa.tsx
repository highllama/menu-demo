import { useSearchParams } from "react-router-dom";
const useIsPwa = () => {
  const [searchParams] = useSearchParams();
  const isPWA = searchParams.get("pwa") === "true";
  return isPWA;
};

export default useIsPwa;
