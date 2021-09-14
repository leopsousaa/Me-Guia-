import React from "react";
import { TouchableOpacity, Text, View, Image, Pressable } from "react-native";

import { PALLET } from "../../globalStyles/palletColor";
import styles from "./styles";
import { viewStyles } from "../../globalStyles/viewStyles";

import { Ionicons } from "@expo/vector-icons";

const CardRoute = ({
  image,
  title,
  time,
  distance,
  rating,
  pressViewGuides,
  pressViewRoute,
}) => {
  return (
    <Pressable style={styles.container} onPress={pressViewRoute}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={viewStyles.row}>
        <Text style={styles.title}> {title} </Text>
        <TouchableOpacity style={styles.button} onPress={pressViewGuides}>
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
          <Text style={styles.Text}> {time} </Text>
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
  );
};

export default CardRoute;
