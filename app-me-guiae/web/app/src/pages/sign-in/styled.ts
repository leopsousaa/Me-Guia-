import styled from 'styled-components'

import { COLOR } from '../../styles/PALLET'

interface ButtonDisabled {
  disabled?: boolean
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${COLOR.QUARTENARY};
`
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15%;
  min-width: 350px;
  max-width: 440px;
  height: 65%;
  padding: 10px 30px;
  border-radius: 5px;
  background-color: ${COLOR.TERTIARY};

  -webkit-box-shadow: 2px 2px 5px 0px rgba(186, 186, 186, 1);
  -moz-box-shadow: 2px 2px 5px 0px rgba(186, 186, 186, 1);
  box-shadow: 2px 2px 5px 0px rgba(186, 186, 186, 1);

  @media (max-width: 414px) {
    min-width: 300px;
    padding: 5px 15px;
    height: 55%;
  }
`
export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40%;
`
export const InputsWapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60%;
`
export const Button = styled.button<ButtonDisabled>`
  width: 100%;
  height: 50px;
  outline: none;
  border: none;
  margin-top: 15px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
  background-color: ${props =>
    props.disabled ? COLOR.SECONDARY : COLOR.PRIMARY};

  :hover {
    opacity: ${props => (props.disabled ? 1 : 0.8)};
    transition: 200ms all;
  }
`
export const TextButton = styled.label<ButtonDisabled>`
  color: ${COLOR.TERTIARY};
  font-weight: 500;
  font-size: 16px;
  cursor: ${props => (props.disabled ? 'default' : 'pointer')};
`
export const Image = styled.img`
  width: 150px;
  height: 150px;

  @media (max-width: 414px) {
    width: 120px;
    height: 120px;
  }
`
