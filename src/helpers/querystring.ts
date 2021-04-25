export const objectToQuerystring = (
  queryObject: Record<string, unknown>
): string =>
  Object.keys(queryObject)
    .map(key => `${key}=${queryObject[key]}`)
    .join('&')
