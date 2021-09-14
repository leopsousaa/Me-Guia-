import React from "react";
import { View, Text } from "react-native";

// import { Container } from './styles';

const DetailsGuide = ({route}) => {
  return (
    <View>
      <Text> {route.params.id} </Text>
    </View>
  );
};

export default DetailsGuide;
