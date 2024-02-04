import Api from './config'

export const getSearchProducts = async (q) => {
  const { data } = await Api.get(`/sites/MLB/search?q=${q}`)
  return data
}
