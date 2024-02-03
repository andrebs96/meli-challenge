import React from 'react'
import { BrowserRouter, Routes as RoutesRRD, Route } from 'react-router-dom'

import Home from 'pages/home'
import Search from 'pages/search'

import ROUTES from 'utils/routes'

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRRD>
        <Route path={ROUTES.HOME} exact index element={<Home />} />
        <Route path={ROUTES.SEARCH} element={<Search />} />
      </RoutesRRD>
    </BrowserRouter>
  )
}

export default Routes
