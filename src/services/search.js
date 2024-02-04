import Api from './config'

export const getSearchProducts = async (q) => {
  const { data } = await Api.get(`/sites/MLB/search?status=active&q=${q}`)
  return data
}
