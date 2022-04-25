import React from 'react'
import { ScrollView, StyleSheet } from 'react-native'
import { RoundPixel } from '../../utils/roundPixel'

interface PropsType {
  children: JSX.Element[] | JSX.Element
}

const ScrollContainer = ({ children }: PropsType) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.container}
    >
      {children}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: 'center',
    top: RoundPixel(20)
  }
})

export default ScrollContainer
