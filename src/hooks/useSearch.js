import { useNavigate } from 'react-router-dom'

import ROUTES from 'utils/routes'

export const useSearch = () => {
  const navigate = useNavigate()

  const onSubmit = (value) => {
    return navigate(`${ROUTES.SEARCH}?terms=${value}`)
  }

  return { onSubmit }
}

export default useSearch
