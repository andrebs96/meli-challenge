import React from 'react'

import { useQuery } from 'utils/routes'

import TemplateSearch from 'templates/Search'

export default function Search() {
  const query = useQuery()

  const terms = query.get('terms')

  return (
    <TemplateSearch
      terms={terms}
      items={[
        {
          id: 1,
          status: 'active',
          name: 'MacBook Air M1 2020 cinza-espacial 13.3", Apple M1  8GB de RAM 256GB SSD, Apple M1 8-Core GPU 60 Hz 2560x1600px macOS',
          picture: [
            {
              id: '691918-MLA44099561087_112020',
              url: 'https://mla-s2-p.mlstatic.com/691918-MLA44099561087_112020-F.jpg'
            }
          ]
        },
        {
          id: 1,
          status: 'active',
          name: 'Teste',
          picture: [
            {
              id: '691918-MLA44099561087_112020',
              url: 'https://mla-s2-p.mlstatic.com/691918-MLA44099561087_112020-F.jpg'
            }
          ]
        },
        {
          id: 1,
          status: 'active',
          name: 'Teste',
          picture: [
            {
              id: '691918-MLA44099561087_112020',
              url: 'https://mla-s2-p.mlstatic.com/691918-MLA44099561087_112020-F.jpg'
            }
          ]
        },
        {
          id: 1,
          status: 'active',
          name: 'Teste',
          picture: [
            {
              id: '691918-MLA44099561087_112020',
              url: 'https://mla-s2-p.mlstatic.com/691918-MLA44099561087_112020-F.jpg'
            }
          ]
        },
        {
          id: 1,
          status: 'active',
          name: 'Teste',
          picture: [
            {
              id: '691918-MLA44099561087_112020',
              url: 'https://mla-s2-p.mlstatic.com/691918-MLA44099561087_112020-F.jpg'
            }
          ]
        }
      ]}
    />
  )
}
