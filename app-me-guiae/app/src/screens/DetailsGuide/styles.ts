import { StyleSheet } from 'react-native'
import { RoundPixel, widthDPI } from '../../utils/roundPixel'
import { shadow } from '../../globalStyles/shadow'
import { PALLET } from '../../globalStyles/palletColor'

const styles = StyleSheet.create({
  container: {
    paddingTop: RoundPixel(20),
    alignItems: 'center'
  },
  card: {
    width: widthDPI(90),
    borderRadius: RoundPixel(16),
    padding: RoundPixel(16),
    marginTop: RoundPixel(16),
    backgroundColor: PALLET.light,
    ...shadow.shadow
  },
  containerImage: {
    alignItems: 'center'
  },
  cape: {
    width: widthDPI(100),
    height: RoundPixel(148)
  },
  thumbnail: {
    width: RoundPixel(100),
    height: RoundPixel(100),
    borderRadius: RoundPixel(50),
    position: 'absolute',
    top: RoundPixel(80)
  },
  title: {
    fontWeight: 'bold',
    color: PALLET.secondColor,
    fontSize: 16
  },
  text: {
    color: PALLET.fontThin,
    fontSize: 14
  },
  button: {
    paddingLeft: RoundPixel(12),
    paddingRight: RoundPixel(12),
    height: RoundPixel(32),
    width: RoundPixel(112),
    right: RoundPixel(16),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: RoundPixel(16),
    backgroundColor: PALLET.primaryColor,
    ...shadow.shadow,
    position: 'absolute',
    bottom: RoundPixel(16)
  },
  textButton: {
    color: PALLET.light,
    fontWeight: 'bold',
    fontSize: 14
  }
})

export { styles }
