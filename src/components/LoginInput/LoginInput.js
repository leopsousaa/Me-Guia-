import React from 'react'
import { View, TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { styles } from './styles'

const LoginInput = ({
  iconName,
  placeholder,
  event,
  hidePass,
  toggleHidePass
}) => {
  return (
    <View style={styles.container}>
      <Ionicons name={iconName} size={22} color="#8c8c8c" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={event}
        secureTextEntry={hidePass ? true : false}
      />

      {toggleHidePass && <Ionicons
        name={hidePass ? 'eye-outline' : 'eye-off-outline'}
        size={22}
        color="#8c8c8c"
        onPress={toggleHidePass}
      />}
    </View>
  )
}

export default LoginInput