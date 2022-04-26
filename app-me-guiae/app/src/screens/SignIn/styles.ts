import { StyleSheet } from 'react-native'

import { RoundPixel } from '../../utils/roundPixel'

const styles = StyleSheet.create({
  logo: {
    width: RoundPixel(120),
    height: RoundPixel(120),
    borderRadius: RoundPixel(10),
    backgroundColor: '#0ff'
  },
  text: {
    fontSize: 32
  }
})

export { styles }
