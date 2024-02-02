import React from 'react'
import { BrowserRouter, Routes as RoutesRRD, Route } from 'react-router-dom'

import Home from 'pages/home'
import Pesquisa from 'pages/pesquisa'

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRRD>
        <Route path="/" exact index element={<Home />} />
        <Route path="/pesquisa" element={<Pesquisa />} />
      </RoutesRRD>
    </BrowserRouter>
  )
}

export default Routes
