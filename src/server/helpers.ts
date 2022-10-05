export const formatPrice = (price: string, name?: string): string => {
  const numPrice = Number(price);

  if (Number.isNaN(numPrice)) return price;
  if (name && name === 'purgatorio' && numPrice < 1) {
    return `420.69, probs`;
  }

  const isWholeNum = numPrice % 1 === 0;
  if (isWholeNum) return `${numPrice.toFixed(1)} ETH`;

  let formattedPrice: string;

  if (numPrice < 0.1) formattedPrice = `${parseFloat(numPrice.toFixed(3))} ETH`;
  formattedPrice = `${parseFloat(numPrice.toFixed(2))} ETH`;

  return formattedPrice;
};
