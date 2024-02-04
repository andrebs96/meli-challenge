import React, { useEffect, useState } from 'react'

import { useQuery } from 'utils/routes'

import TemplateSearch from 'templates/Search'

import { getSearchProducts } from 'services/search'

export default function Search() {
  const query = useQuery()

  const terms = query.get('terms')

  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const searchTerms = async () => {
    try {
      setLoading(true)
      setResults([])
      const data = await getSearchProducts(terms)
      setResults(data.results)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    searchTerms()
  }, [terms])

  return <TemplateSearch terms={terms} items={results} loading={loading} />
}
