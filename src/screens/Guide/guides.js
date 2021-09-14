import React from "react";

import CardGuide from "../../components/CardGuide/CardGuide";
import ScrollContainer from "../../components/ScrollContainer";

import { DATA_GUIDE_FAKE } from "./data";

const Guides = ({ navigation }) => {
  function handleGuideNavigation(id) {
    navigation.navigate("DetailsGuide", {
      id,
    });
  }

  return (
    <ScrollContainer>
      {DATA_GUIDE_FAKE.map((item) => (
        <CardGuide pressViewDetails={() => handleGuideNavigation(item.id)} />
      ))}
    </ScrollContainer>
  );
};

export default Guides;
