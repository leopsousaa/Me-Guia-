import React, { useEffect } from 'react'
import * as WebBrowser from 'expo-web-browser'
import { ResponseType } from 'expo-auth-session'
import * as Google from 'expo-auth-session/providers/google'
import { View, Text, Image, Pressable } from 'react-native'

import { firebase } from '../../services/firebase'

import ScreenContainer from '../../components/ScreenContainer'
import { styles } from './styles'

WebBrowser.maybeCompleteAuthSession()

const SignIn = ({ navigation }) => {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '759065742560-ikpkfb7m7d0l4bh72msf8bjv6r4ea00m.apps.googleusercontent.com'
  })

  console.log({REQ: request, RES:response})

  useEffect(() => {
    if(response?.type === 'success') {
      const { id_token } = response.params

      const credential = firebase.auth.GoogleAuthProvider.credential(id_token)
      firebase.auth().signInWithCredential(credential)
    }
  }, [])

  return (
    <ScreenContainer>
      <Image style={styles.logo} resizeMode='cover' />
      <View>
        <Pressable disabled={!request} onPress={() => promptAsync()}>
          <Text>Login com o google</Text>
        </Pressable>
      </View>
    </ScreenContainer>
  )
}

export default SignIn
