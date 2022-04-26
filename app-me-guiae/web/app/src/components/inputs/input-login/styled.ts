import styled from 'styled-components'

interface IAlertError {
  error?: boolean
}

export const Container = styled.div`
  width: 100%;
  position: relative;
  padding-top: 13px;
  margin-top: 10px;
`
export const Input = styled.input<IAlertError>`
  border: 0;
  outline: none;
  width: 100%;
  height: 40px;
  font-size: 14px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -webkit-appearance: none;
  border-radius: 0;
  background-color: transparent;
  border-bottom: 1px solid ${props => (props.error ? '#ff6666' : '#797979')};
  color: ${props => (props.error ? '#ff6666' : '#333333')};
  padding-left: 5px;
  text-transform: uppercase;

  :focus + label,
  :not(:placeholder-shown) + label {
    font-size: 12px;
    margin-top: 0;
  }
`
export const Label = styled.label<IAlertError>`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 25px;
  transition: all 0.3s ease-out;
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  font-weight: 400;
  font-size: 14px;
  color: ${props => (props.error ? '#ff6666' : '#666')};
`
