import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { AuthContext } from '../../context/authContext'

import { firebase } from '../../config/firebase'

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
  const auth = getAuth(firebase)
  const history = useHistory()

  const { setIsAuth } = useContext(AuthContext)

  function handleLogin() {
    if (!email) return setEmailErr(true)
    if (!pass) return setPassErr(true)

    signInWithEmailAndPassword(auth, email, pass)
      .then(res => {
        if (res.user.uid) {
          setIsAuth(true)
          history.push('/dashboard')
        }
      })
      .catch(err => {
        if (err.code === 'auth/invalid-email') {
          setEmailErr(true)
        }
        if (err.code === 'auth/wrong-password') {
          setPassErr(true)
        }
      })
  }

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
          <Button disabled={buttonDisabled} onClick={() => handleLogin()}>
            <TextButton>Entrar</TextButton>
          </Button>
        </InputsWapper>
      </Box>
    </Container>
  )
}

export default SignIn
