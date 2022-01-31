export const shortAddress = (address: string) =>
  address.replace(address.substring(5, address.length - 5), "…");

function getLang() {
  if (navigator.languages != undefined) return navigator.languages[0];
  return navigator.language;
}

export function formatPrice(price: number, mutez: boolean = true) {
  const caluclated = mutez ? price / 1e6 : price;
  const options = { maximumFractionDigits: 2 };
  return new Intl.NumberFormat(getLang(), options).format(caluclated);
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric' }).format(date);
}
