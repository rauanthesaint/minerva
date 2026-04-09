type AmountFormatOptions = Partial<{
  currencyCode: string;
  locale: string;
}>;

export function formatAmount(
  x: number,
  options?: AmountFormatOptions,
): [decimal: string, fraction: string] {
  const locale = options?.locale ?? "en";
  const currency = options?.currencyCode ?? "kzt";
  const fractionLength = 2;

  const formatted = Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "narrowSymbol",
    currencySign: "standard",
    maximumFractionDigits: fractionLength,
  }).format(x);

  const offset = formatted.length - 1 - fractionLength;
  const decimal = formatted.slice(0, offset);
  const fraction = formatted.slice(offset);

  return [decimal, fraction];
}
