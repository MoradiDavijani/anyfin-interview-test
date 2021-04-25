const names = ['K', 'M', 'B']
export const numberToText = (num: number) => {
  let suffixIndex = 0
  do {
    suffixIndex += 1
    num = num / 1000
  } while (suffixIndex < names.length - 1 && num >= 1000)

  return `${Math.floor(num * 100) / 100} ${names[suffixIndex]}`
}
