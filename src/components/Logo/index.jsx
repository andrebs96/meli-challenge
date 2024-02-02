import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

import LogoImage from 'assets/img/pt_logo_large_plus.webp'

const Logo = ({ marginBottom = '0' }) => (
  <S.Wrapper
    src={LogoImage}
    alt="Mercado Livre Brasil - Onde comprar e vender de Tudo"
    marginBottom={marginBottom}
  />
)

Logo.propTypes = {
  marginBottom: PropTypes.string
}

export default Logo
