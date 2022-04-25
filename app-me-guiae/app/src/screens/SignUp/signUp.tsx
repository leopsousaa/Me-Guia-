import React from 'react'
import { Text, Button } from 'react-native'
import { firebase } from '../../services/firebase'

import ScreenContainer from '../../components/ScreenContainer'
import { useNavigation } from '@react-navigation/native'

const SignIn: React.FC = () => {
  const navigation = useNavigation()

  function handleSignIn() {
    firebase
      .auth()
      .createUserWithEmailAndPassword('wesleyleandro@gmail.com', '123456')
      .then(() => {
        console.log('User account created & signed in!')
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!')
        }

        console.error(error)
      })
  }

  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => {}} />
      <Button title="Create Account" onPress={() => {}} />
    </ScreenContainer>
  )
}

export default SignIn
