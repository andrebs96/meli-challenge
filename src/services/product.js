import Api from './config'

export const getProduct = async (productId) => {
  const { data } = await Api.get(`/products/${productId}`)
  return data
}

export const getProductDescription = async (productId) => {
  const { data } = await Api.get(`/items/${productId}/description`)
  return data
}
