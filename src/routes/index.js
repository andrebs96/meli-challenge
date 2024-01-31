import React from 'react'
import { BrowserRouter, Routes as RoutesRRD, Route } from 'react-router-dom'

import Home from 'pages/home'

function Routes() {
  return (
    <BrowserRouter>
      <RoutesRRD>
        <Route path="/" exact index element={<Home />} />
      </RoutesRRD>
    </BrowserRouter>
  )
}

export default Routes
