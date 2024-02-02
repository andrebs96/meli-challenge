import styled from 'styled-components'

import * as ContainerStyles from 'components/Container'

export const Wrapper = styled.header`
  background-color: #ffe600;
  padding: 1rem 0;
`

export const Container = styled(ContainerStyles.Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.2rem;
`
