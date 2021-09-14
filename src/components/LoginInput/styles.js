import { StyleSheet } from 'react-native'

import { RoundPixel } from '../../utils/roundPixel'
import { PALLET } from '../../globalStyles/palletColor'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: RoundPixel(300),
    height: RoundPixel(45),
    backgroundColor: '#e6e6e6',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: RoundPixel(5),
    padding: RoundPixel(5),
    borderRadius: RoundPixel(5)
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginHorizontal: RoundPixel(5),
    fontFamily: 'Inter-Medium'
  }
})