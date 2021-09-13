import React from "react";
import { TouchableOpacity, Text, View, Pressable } from "react-native";

import { PALLET } from "../../globalStyles/palletColor";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

const CardTip = ({
  title,
  time,
  distance,
  rating,
  pressViewGuides,
  pressViewTip
}) => {
  return (
    <Pressable style={styles.container} onPress={pressViewTip}>
      <View style={styles.row}>
        <Text style={styles.title}> {title} </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={pressViewGuides}
        >
          <Text style={styles.textBtn}>Ver Guias</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.rowEnd}>
        <View style={styles.row}>
          <Ionicons
            name="md-time-sharp"
            size={24}
            color={PALLET.primaryColor}
          />
          <Text style={styles.Text}> {time} </Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={PALLET.primaryColor}
          />
          <Text style={styles.Text}> {distance} </Text>
        </View>
        <View style={styles.column}>
          <Ionicons name="heart-sharp" size={24} color={PALLET.primaryColor} />
          <Text style={styles.Text}> {rating} </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default CardTip;
