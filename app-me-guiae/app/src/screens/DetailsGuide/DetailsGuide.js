import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

import ScrollContainer from "../../components/ScrollContainer";
import { RoundPixel, widthDPI } from "../../utils/roundPixel";
import { shadow } from "../../globalStyles/shadow";
import { PALLET } from "../../globalStyles/palletColor";

const DetailsGuide = ({ route }) => {
  console.warn(route);
  return (
    <>
      <View style={styles.containerImage}>
        <Image source={{ uri: route.params.cape }} style={styles.cape} />
        <Image
          source={{ uri: route.params.thumbnail }}
          style={styles.thumbnail}
        />
      </View>
      <ScrollContainer>
        <View style={styles.container}>
          <Text>
            {route.params.fullName} | {route.params.age} | {route.params.city}
          </Text>

          <View style={styles.card}>
            <Text style={styles.title}>Sobre {route.params.fullName}</Text>
            <Text style={styles.text}>{route.params.description}</Text>
            <Text style={styles.title}>
              Especialidades: {route.params.specialties}
            </Text>
            <Text style={styles.title}>
              Valor por pessoa: R${route.params.value}
            </Text>
            <Text style={styles.title}>Destino: {route.params.routes[0]}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Agendar...")}
            >
              <Text style={styles.textButton}>Me Guiaê</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: RoundPixel(20),
    alignItems: "center",
  },
  card: {
    width: widthDPI(90),
    borderRadius: RoundPixel(16),
    padding: RoundPixel(16),
    top: RoundPixel(12),
    backgroundColor: PALLET.light,
    ...shadow.shadow,
  },
  containerImage: {
    alignItems: "center",
  },
  cape: {
    width: widthDPI(100),
    height: RoundPixel(148),
  },
  thumbnail: {
    width: RoundPixel(100),
    height: RoundPixel(100),
    borderRadius: RoundPixel(50),
    position: "absolute",
    top: RoundPixel(80),
  },
  title: {
    fontWeight: "bold",
    color: PALLET.secondColor,
    fontSize: 14,
  },
  text: {
    color: PALLET.fontThin,
    fontSize: 14,
  },
  button: {
    paddingLeft: RoundPixel(12),
    paddingRight: RoundPixel(12),
    height: RoundPixel(32),
    width: RoundPixel(112),
    right: RoundPixel(16),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RoundPixel(16),
    backgroundColor: PALLET.primaryColor,
    ...shadow.shadow,
    position: "absolute",
    bottom: RoundPixel(16),
  },
  textButton: {
    color: PALLET.light,
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default DetailsGuide;
