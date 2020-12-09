const getPrefixes = (text: string, qtd = 2, splitBy = ' '): string => {
  const arrText = text.split(splitBy)

  const cbPrefix = (acc, value, pos) => {
    return (pos >= qtd && acc) || acc.concat(value.charAt(0))
  }
  const prefixes = arrText.reduce(cbPrefix, [, ''])

  return prefixes
}

export default getPrefixes
