import React from 'react'
import { Text, View, Pressable, Image } from 'react-native'

import { PALLET } from '../../styles/palletColor'
import styles from './styles'
import { viewStyles } from '../../styles/viewStyles'

import { Ionicons } from '@expo/vector-icons'

interface PropsType {
  title: string
  time: number
  distance: number
  rating: string
  thumbnail: string
}

const CardRoute: React.FC<PropsType> = props => {
  return (
    <Pressable style={styles.container} onPress={() => alert('view route')}>
      <Image source={{ uri: props.thumbnail }} style={styles.Thumbnail} />

      <View style={styles.containerTitle}>
        <Text style={styles.title}>{props.title}</Text>
      </View>

      <View style={styles.cardInfo}>
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
          <Text style={styles.Text}> {distance} </Text>
        </View>
        <View style={viewStyles.columnReverse}>
          <Ionicons name="heart-sharp" size={24} color={PALLET.primaryColor} />
          <Text style={styles.Text}> {rating} </Text>
        </View>
      </View>
    </Pressable>
  )
}

export default CardRoute
