import React, { useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'

import { firebase } from '../../services/firebase'

import ScreenContainer from '../../components/ScreenContainer'
import LoginInput from '../../components/LoginInput/LoginInput'

import { styles } from './styles'

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visiblePassword, setVisiblePassword] = useState(false)

  function handleSignIn() {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(res => console.log(res))
  }

  return (
    <ScreenContainer>
      {/* <Image style={styles.logo} resizeMode="cover" source={''} /> */}
      <View>
        <LoginInput
          placeholder="Email"
          name="mail-outline"
          event={e => setEmail(e)}
          hidePass={false}
        />
        <LoginInput
          placeholder="Senha"
          name="lock-closed-outline"
          event={e => setPassword(e)}
          hidePass={visiblePassword}
          toggleHidePass={() => setVisiblePassword(!visiblePassword)}
        />
        <Pressable>
          <Text>Entrar</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  )
}

export default SignIn
