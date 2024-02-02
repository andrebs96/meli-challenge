import { useLocation } from 'react-router-dom'

export const useQuery = () => new URLSearchParams(useLocation().search)

export default {
  HOME: '/',
  SEARCH: '/pesquisa'
}
