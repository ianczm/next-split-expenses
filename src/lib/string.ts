export function toCurrencyString(
  amount: number,
  options?: {
    localeCode?: string;
    currencyCode?: string;
    decimalPlaces?: number;
  },
): string {
  return amount.toLocaleString(options?.localeCode ?? "en-US", {
    currency: options?.currencyCode ?? "MYR",
    minimumFractionDigits: options?.decimalPlaces ?? 2,
    maximumFractionDigits: options?.decimalPlaces ?? 2,
  });
}
