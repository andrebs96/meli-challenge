import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import TemplateProduct from 'templates/Product'

import { getProduct } from 'services/product'

export default function Product() {
  const { product } = useParams()

  const [loading, setLoading] = useState(false)
  // const [productDetail, setProductDetail] = useState([])

  const getProductDetail = async () => {
    try {
      setLoading(true)
      const data = await getProduct(product)
      console.log('product: ', data)
      // setResults(data.results)
    } catch (error) {
      throw new Error(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getProductDetail()
  }, [product])

  return <TemplateProduct loading={loading} />
}
