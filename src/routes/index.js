import React from 'react'
import { BrowserRouter, Routes as RoutesRRD, Route } from 'react-router-dom'

import Home from 'pages/home'
import Search from 'pages/search'
import Product from 'pages/product'

import ROUTES from 'utils/routes'

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRRD>
        <Route path={ROUTES.HOME} exact index element={<Home />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
        <Route path={'/:product/p'} element={<Product />} />
        {/* <Route path="*" element={<>404</>} /> */}
        {/* https://www.mercadolivre.com.br/404 */}
      </RoutesRRD>
    </BrowserRouter>
  )
}

export default Routes
