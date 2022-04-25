import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

import { styles } from './styles'

interface PropsType {
  placeholder: string
}

const Input: React.FC<PropsType> = props => {
  return (
    <TextInput
      placeholder={props.placeholder}
      style={styles.input}
      onChangeText={res => console.log(res)}
    />
  )
}

export default Input
