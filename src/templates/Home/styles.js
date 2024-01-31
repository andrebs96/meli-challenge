import styled from 'styled-components'

export const Wrapper = styled.main`
  align-items: center;
  background-color: #ffe600;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`

export const Content = styled.div`
  text-align: center;
`

export const Heading = styled.h1`
  position: absolute;
  z-index: -1;
  font-size: 0;
`

export const Logo = styled.img`
  margin-bottom: 2.4rem;
  width: 13rem;
`

export const InputField = styled.div`
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  border-radius: 0.2rem;
  padding: 1rem 1.6rem;
  height: 4rem;
  width: auto;

  input {
    border: 0;
    outline: 0;
    width: 35vw;
    color: #000000e5;
  }

  button {
    background-color: transparent;
    border: 0;
    color: #666;
    outline: 0;
  }
`
