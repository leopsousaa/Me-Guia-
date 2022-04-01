import React from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { styles } from './styles'

interface PropsType {
  iconName?:
    | 'link'
    | 'search'
    | 'image'
    | 'text'
    | 'alert'
    | 'checkbox'
    | 'menu'
    | 'radio'
    | 'timer'
    | 'key'
    | 'body'
    | 'code'
    | 'map'
    | 'time'
    | 'ellipse'
    | 'filter'
    | 'stop'
    | 'close'
    | 'book'
  placeholder: string
  event: (e: string) => string
  hidePass: boolean
  toggleHidePass: (e: boolean) => boolean
}

const LoginInput: React.FC<PropsType> = props => {
  return (
    <View style={styles.container}>
      <Ionicons name={props.iconName} size={22} color="#8c8c8c" />
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        onChangeText={props.event}
        secureTextEntry={props.hidePass ? true : false}
      />
      {/*
      {props.toggleHidePass && (
        <Ionicons
          name={props.hidePass ? 'eye-outline' : 'eye-off-outline'}
          size={22}
          color="#8c8c8c"
          onPress={props.toggleHidePass}
        />
      )} */}
    </View>
  )
}

export default LoginInput
