const formatPrice = (
  price: number,
  options: { currency: string; locale: string; maximumFractionDigits?: number },
) => {
  if (!price) return "";
  const {
    currency = "COP",
    locale = "es-CO",
    maximumFractionDigits = 0,
  } = options || {};
  const formattedPrice = new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits,
  }).format(price);

  return formattedPrice.replace(/\s/g, "").replace(/&nbsp;/g, "");
};

export default formatPrice;
