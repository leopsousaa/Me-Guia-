import React from "react";
import { Text } from "react-native";

import CardTip from "../../components/CardTip/";

import ScrollContainer from "../../components/ScrollContainer";

import { DATA } from "./data";

const Tips = () => {
  return (
    <ScrollContainer>
      {DATA.map((item) => (
        <CardTip
          key={item.id}
          icon={item.icon}
          title={item.title}
          description={item.description}
        />
      ))}
    </ScrollContainer>
  );
};

export default Tips;
