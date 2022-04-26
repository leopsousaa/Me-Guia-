import { StyleSheet } from 'react-native'

import { shadow } from '../../styles/shadow'
import { RoundPixel, widthDPI } from '../../utils/roundPixel'
import { PALLET } from '../../styles/palletColor'

const styles = StyleSheet.create({
  container: {
    width: widthDPI(90),
    height: RoundPixel(112),
    backgroundColor: '#f3f3f3',
    borderRadius: RoundPixel(16),
    marginTop: RoundPixel(20),
    ...shadow.shadow
  },
  cardInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    bottom: RoundPixel(8),
    marginLeft: RoundPixel(108),
    paddingRight: RoundPixel(16)
  },
  containerTitle: {
    position: 'absolute',
    marginLeft: RoundPixel(108),
    padding: 0
  },
  Thumbnail: {
    width: RoundPixel(80),
    height: RoundPixel(80),
    borderRadius: RoundPixel(40),
    left: RoundPixel(12),
    top: RoundPixel(16)
  },
  title: {
    fontSize: 20,
    top: RoundPixel(16),
    color: PALLET.secondColor,
    fontWeight: 'bold'
  },
  Text: {
    color: PALLET.secondColor,
    fontWeight: `bold`
  }
})

export default styles
