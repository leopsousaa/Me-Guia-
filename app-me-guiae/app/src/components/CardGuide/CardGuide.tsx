import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  Image,
  Pressable,
  GestureResponderEvent
} from 'react-native'

import { PALLET } from '../../styles/palletColor'
import { shadow } from '../../styles/shadow'
import { RoundPixel, widthDPI } from '../../utils/roundPixel'

import { Ionicons } from '@expo/vector-icons'

interface PropsType {
  id: number
  thumbnail: string
  fullName: string
  age: number
  city: string
  description: string
  specialties: string
  achievements:
    | 'text'
    | 'link'
    | 'search'
    | 'image'
    | 'alert'
    | 'checkbox'
    | 'menu'
    | 'radio'
    | 'timer'
    | 'key'
    | 'body'
    | 'code'
    | 'map'
    | 'time'
    | 'ellipse'
    | 'filter'
    | 'stop'
    | 'close'
    | 'book'
  pressViewDetails: (e: GestureResponderEvent) => any
}

const CardGuide: React.FC<PropsType> = props => {
  return (
    <>
      <Pressable
        style={styles.CardContainer}
        onPress={props.pressViewDetails}
        key={props.id}
      >
        <Image source={{ uri: props.thumbnail }} style={styles.Thumbnail} />
        <View style={styles.CardInfo}>
          <Text style={styles.text}>
            {props.fullName} , {props.age} , {props.city}
          </Text>
          <Text style={styles.text}>{props.description}</Text>
          <Text style={styles.text}>Especialidades: {props.specialties}</Text>
          <Ionicons name={props.achievements} size={20} />
        </View>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  CardContainer: {
    height: RoundPixel(112),
    width: widthDPI(90),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: PALLET.light,
    borderRadius: RoundPixel(16),
    marginTop: RoundPixel(20),
    ...shadow.shadow
  },
  CardInfo: {
    flex: 1,
    paddingLeft: RoundPixel(28)
  },
  Thumbnail: {
    width: RoundPixel(80),
    height: RoundPixel(80),
    borderRadius: RoundPixel(40),
    left: RoundPixel(12)
  },
  title: {
    fontFamily: 'BebasNeue-Regular',
    fontSize: 20,
    fontWeight: 'bold',
    color: PALLET.secondColor
  },
  text: {
    fontSize: 12,
    fontFamily: 'Inter-Bold',
    color: PALLET.secondColor
  }
})

export default CardGuide
