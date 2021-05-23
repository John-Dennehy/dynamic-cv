
export const formatDate = (
  date: Date,
  locale?: string,
  options?: Intl.DateTimeFormatOptions
): string => {

  if (!locale) { locale = 'en-GB' }
  if (!options) {options = {month: "short", year: "numeric"}}

  return (
    new Date(date).toLocaleDateString(locale, options)
  )
}
