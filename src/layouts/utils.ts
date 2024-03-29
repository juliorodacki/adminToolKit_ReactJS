export function toMoney(money: number | null | undefined): string {
  if (money === null || money === undefined) {
    return "0,00";
  }
  return money
    .toLocaleString("pt-br", { style: "currency", currency: "BRL" })
    .replace(".", ",");
}
