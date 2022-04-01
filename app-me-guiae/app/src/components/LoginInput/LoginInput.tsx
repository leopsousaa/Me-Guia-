import React from 'react'
import { View, TextInput, GestureResponderEvent } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

interface PropsType {
  name: keyof typeof Ionicons.glyphMap
  placeholder: string
  event: (e: string) => void | undefined
  hidePass: boolean
  toggleHidePass?: (e: GestureResponderEvent) => void
}

const LoginInput: React.FC<PropsType> = props => {
  return (
    <View style={styles.container}>
      <Ionicons name={props.name} size={22} color="#8c8c8c" />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.event}
        secureTextEntry={props.hidePass ? true : false}
      />

      {props.toggleHidePass && (
        <Ionicons
          name={props.hidePass ? 'eye-outline' : 'eye-off-outline'}
          size={22}
          color="#8c8c8c"
          onPress={props.toggleHidePass}
        />
      )}
    </View>
  )
}

export default LoginInput
