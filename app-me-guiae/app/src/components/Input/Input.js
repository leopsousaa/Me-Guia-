import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

import { styles } from "./styles";

const Input = ({ placeholder }) => {
  return (
    <TextInput
      placeholder={placeholder}
      style={styles.input}
      onChangeText={(res) => console.log(res)}
    />
  );
};

export default Input;
