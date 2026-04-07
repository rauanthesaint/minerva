type AmountFormatOptions = Partial<{
  currencyCode: string;
  locale: string;
}>;

export function formatAmount(x: number, options?: AmountFormatOptions): string {
  const locale = options?.locale ?? "en";
  const currency = options?.currencyCode ?? "kzt";

  return Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    currencySign: "standard",
    maximumFractionDigits: 2,
  }).format(x);
}
