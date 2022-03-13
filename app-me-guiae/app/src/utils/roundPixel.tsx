import { PixelRatio, Dimensions } from 'react-native'

const Wd = Dimensions.get('window').width

// Esta função calcula a densidade de pixels da altura da janela do dispositivo e converte em porcentagem.
const heightDPI = (value: number, dimension: number) => {
  const heightInDPI = PixelRatio.roundToNearestPixel(dimension)

  const result = (heightInDPI * value) / 100

  return result
}

// Esta função calcula a densidade de pixels da altura da janela do dispositivo.
const RoundPixel = (value: number) => {
  const PixelResult = PixelRatio.roundToNearestPixel(value)

  return PixelResult
}

// Esta função calcula a densidade de pixels da largura da janela do dispositivo e converte em porcentagem.
const widthDPI = (value: number) => {
  const widthInDPI = PixelRatio.roundToNearestPixel(Wd)

  const result = (widthInDPI * value) / 100

  return result
}

export { heightDPI, widthDPI, RoundPixel }
