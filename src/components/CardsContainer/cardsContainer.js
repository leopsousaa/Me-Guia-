import React from "react";
import { TouchableOpacity, Text, View } from "react-native";

import { PALLET } from "../../globalStyles/palletColor";
import styles from "./styles";

import { Ionicons } from "@expo/vector-icons";

const CardsContainer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.title}>Title Route</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Exibir Guias Cadastrados Nesta Rota!")}
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
          <Text style={styles.Text}>Time</Text>
        </View>
        <View style={styles.row}>
          <Ionicons
            name="location-sharp"
            size={24}
            color={PALLET.primaryColor}
          />
          <Text style={styles.Text}>20km</Text>
        </View>
        <View style={styles.column}>
          <Ionicons name="heart-sharp" size={24} color={PALLET.primaryColor} />
          <Text style={styles.Text}>4.9</Text>
        </View>
      </View>
    </View>
  );
};

export default CardsContainer;
