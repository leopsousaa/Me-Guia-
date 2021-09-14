import React from "react";
import { Text, StyleSheet } from "react-native";

import ScrollContainer from "../../components/ScrollContainer";
import CardFavorite from "../../components/CardFavorite";

import { DATA_FAVORITE_FAKE } from "./data";
import { PALLET } from "../../globalStyles/palletColor";
import { RoundPixel } from "../../utils/roundPixel";

const favorite = () => {
  return (
    <ScrollContainer>
      <Text style={styles.title}>Meus Favoritos</Text>

      {DATA_FAVORITE_FAKE.map((item) => (
        <CardFavorite
          key={item.id}
          title={item.name}
          time={item.time}
          distance={item.distance}
          rating={item.rating}
          thumbnail={item.thumbnail}
        />
      ))}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontFamily: "BebasNeue-Regular",
    color: PALLET.secondColor,
    fontSize: RoundPixel(24),
    left: RoundPixel(16),
    alignSelf: "baseline",
  },
});

export default favorite;
