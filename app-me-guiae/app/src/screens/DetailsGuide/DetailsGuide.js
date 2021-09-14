import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import ScrollContainer from "../../components/ScrollContainer";

import { Ionicons } from "@expo/vector-icons";

import { styles } from "./styles";

const DetailsGuide = ({ route }) => {
  // console.warn(route);
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
            <Text style={styles.text}>
              Especialidades: {route.params.specialties}
            </Text>
            <Text style={styles.text}>
              Valor por pessoa: R${route.params.value}
            </Text>
            <Text style={styles.text}>Destino: {route.params.routes[0]}</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => alert("Agendar...")}
            >
              <Text style={styles.textButton}>Me Guiaê</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>Conquistas</Text>
            <Ionicons name={route.params.achievements[0]} size={24} />
          </View>

          <View style={styles.card}>
            <Text style={styles.title}>
              Pontos Turísticos do {route.params.fullName}
            </Text>
            <Text style={styles.title}>Destino:</Text>
            {route.params.routes.map((item) => (
              <Text style={styles.text}>{item}</Text>
            ))}
          </View>
        </View>
      </ScrollContainer>
    </>
  );
};

export default DetailsGuide;
