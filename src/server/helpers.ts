export const formatPrice = (price: string, name?: string) => {
  const numPrice = Number(price);
  if (Number.isNaN(numPrice)) return price;
  if (name && name === 'purgatorio' && numPrice < 1) {
    return `420.69, probs`;
  }
  if (numPrice < 0.1) return `${numPrice.toFixed(3)} ETH`;
  if (numPrice >= 1) return `${numPrice.toFixed(1)} ETH`;
  return `${numPrice.toFixed(2)} ETH`;
};
