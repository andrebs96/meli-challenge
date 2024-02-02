import React from 'react'

import useSearch from 'hooks/useSearch'

import TemplateHome from 'templates/Home'

export default function Home() {
  const { onSubmit } = useSearch()

  return <TemplateHome onSubmit={onSubmit} />
}
