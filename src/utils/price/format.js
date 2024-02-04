export const formatPriceBR = (price) => {
  return [price].toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}
