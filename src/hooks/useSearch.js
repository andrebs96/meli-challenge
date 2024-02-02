import { useNavigate } from 'react-router-dom'

export const useSearch = () => {
  const navigate = useNavigate()

  const onSubmit = (value) => {
    return navigate(`/pesquisa?terms=${value}`)
  }

  return { onSubmit }
}

export default useSearch
