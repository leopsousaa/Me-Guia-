import React, { useState } from 'react'

import { InputLogin } from '../../components/inputs/input-login'

import Logo from '../../assets/logo.png'

import {
  Box,
  Button,
  Container,
  InputsWapper,
  LogoWrapper,
  TextButton,
  Image
} from './styled'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [emailErr, setEmailErr] = useState(false)
  const [pass, setPass] = useState('')
  const [passErr, setPassErr] = useState(false)
  const [buttonDisabled, setButtonDisabled] = useState(false)

  return (
    <Container>
      <Box>
        <LogoWrapper>
          <Image src={Logo} draggable="false" />
        </LogoWrapper>
        <InputsWapper>
          <InputLogin
            label="Email"
            onChange={e => setEmail(e.currentTarget.value)}
            error={emailErr}
          />
          <InputLogin
            label="Senha"
            type="password"
            onChange={e => setPass(e.currentTarget.value)}
            error={passErr}
          />
          <Button disabled={buttonDisabled}>
            <TextButton>Entrar</TextButton>
          </Button>
        </InputsWapper>
      </Box>
    </Container>
  )
}

export default SignIn
