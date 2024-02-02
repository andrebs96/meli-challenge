import React from 'react'
import { BrowserRouter, Routes as RoutesRRD, Route } from 'react-router-dom'

import Home from 'pages/home'
import Pesquisa from 'pages/pesquisa'

import ROUTES from 'utils/routes'

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRRD>
        <Route path={ROUTES.HOME} exact index element={<Home />} />
        <Route path={ROUTES.SEARCH} element={<Pesquisa />} />
      </RoutesRRD>
    </BrowserRouter>
  )
}

export default Routes
