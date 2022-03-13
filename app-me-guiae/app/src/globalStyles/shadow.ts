import { StyleSheet } from 'react-native'
import { RoundPixel } from '../utils/roundPixel'

const shadow = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: RoundPixel(10)
    },
    shadowOpacity: 0.24,
    shadowRadius: 3.5,
    elevation: 5
  }
})

export { shadow }
