import React from "react";
import { Text } from "react-native";

import ScrollContainer from "../../components/ScrollContainer";
import CardsContainer from "../../components/CardsContainer";

const home = () => {
  return (
    <ScrollContainer>
      <CardsContainer />
      <CardsContainer />
      <CardsContainer />
      <CardsContainer />
    </ScrollContainer>
  );
};

export default home;
