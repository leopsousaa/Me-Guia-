import { StyleSheet, Platform } from 'react-native'
import Constants from 'expo-constants'

import { RoundPixel } from '../../utils/roundPixel'

import { PALLET } from '../../globalStyles/palletColor'

const styles = StyleSheet.create({
  header: {
    height: RoundPixel(56) + RoundPixel(Constants.statusBarHeight),
    backgroundColor: PALLET.primaryColor,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  },
  Icon: {
    width: RoundPixel(24),
    height: RoundPixel(24),
    left: RoundPixel(16),
    top: RoundPixel(16)
  }
})

export default styles
