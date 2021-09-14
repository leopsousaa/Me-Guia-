import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";

import { PALLET } from "../../globalStyles/palletColor";
import { shadow } from "../../globalStyles/shadow";
import { RoundPixel, widthDPI } from "../../utils/roundPixel";

import { Ionicons } from "@expo/vector-icons";

const CardGuide = ({
  id,
  thumbnail,
  fullName,
  age,
  city,
  description,
  specialties,
  achievements,
  pressViewDetails,
}) => {
  return (
    <>
      <Pressable
        style={styles.CardContainer}
        onPress={pressViewDetails}
        key={id}
      >
        <Image source={{ uri: thumbnail }} style={styles.Thumbnail} />
        <View style={styles.CardInfo}>
          <Text style={styles.text}>
            {fullName} , {age} , {city}
          </Text>
          <Text
            style={
              ([styles.text],
              { fontFamily: "Inter-Regular", fontSize: RoundPixel(12) })
            }
          >
            {description}
          </Text>
          <Text style={styles.text}>Especialidades: {specialties}</Text>
          <Ionicons name={achievements} size={20} />
        </View>
      </Pressable>
    </>
  );
};

const styles = StyleSheet.create({
  CardContainer: {
    height: RoundPixel(112),
    width: widthDPI(90),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: PALLET.light,
    borderRadius: RoundPixel(16),
    marginTop: RoundPixel(20),
    ...shadow.shadow,
  },
  CardInfo: {
    flex: 1,
    paddingLeft: RoundPixel(28),
  },
  Thumbnail: {
    width: RoundPixel(80),
    height: RoundPixel(80),
    borderRadius: RoundPixel(40),
    left: RoundPixel(12),
  },
  title: {
    fontFamily: "BebasNeue-Regular",
    fontSize: 20,
    fontWeight: "bold",
    color: PALLET.secondColor,
  },
  text: {
    fontSize: 12,
    fontFamily: "Inter-Bold",
    color: PALLET.secondColor,
  },
});

export default CardGuide;
