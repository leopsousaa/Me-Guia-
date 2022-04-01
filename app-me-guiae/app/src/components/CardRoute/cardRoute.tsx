import React from 'react'
import { TouchableOpacity, Text, View, Image, Pressable } from 'react-native'

import { PALLET } from '../../styles/palletColor'
import styles from './styles'
import { viewStyles } from '../../styles/viewStyles'

import { Ionicons } from '@expo/vector-icons'

interface PropsType {
  image: string
  title: string
  time: string
  distance: string
  rating: number
  pressViewGuides: () => any
  pressViewRoute: () => any
}

const CardRoute: React.FC<PropsType> = props => {
  return (
    <Pressable style={styles.container} onPress={props.pressViewRoute}>
      <Image source={{ uri: props.image }} style={styles.image} />
      <View style={viewStyles.row}>
        <Text style={styles.title}> {props.title} </Text>
        <TouchableOpacity style={styles.button} onPress={props.pressViewGuides}>
          <Text style={styles.textBtn}>Ver Guias</Text>
        </TouchableOpacity>
      </View>
      <View style={viewStyles.rowEnd}>
        <View style={viewStyles.row}>
          <Ionicons
            name="md-time-sharp"
            size={24}
            color={PALLET.primaryColor}
          />
          <Text style={styles.Text}> {props.time} </Text>
        </View>
        <View style={viewStyles.row}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={PALLET.primaryColor}
          />
          <Text style={styles.Text}> {props.distance} </Text>
        </View>
        <View style={viewStyles.columnReverse}>
          <Ionicons name="heart-sharp" size={24} color={PALLET.primaryColor} />
          <Text style={styles.Text}> {props.distance} </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CardRoute
