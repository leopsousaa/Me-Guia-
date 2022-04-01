import React from 'react'
import { View, StyleSheet } from 'react-native'

interface PropsType {
  children: React.ReactChild
}

const ScreenContainer = ({ children }: PropsType) => {
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ScreenContainer
