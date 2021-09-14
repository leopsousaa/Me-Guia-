import React from "react";

import CardGuide from "../../components/CardGuide/CardGuide";
import ScrollContainer from "../../components/ScrollContainer";

import { DATA_GUIDE_FAKE } from "./data";

const Guides = ({ navigation }) => {
  function handleGuideNavigation(id) {
    navigation.navigate("Details Guide", {
      id,
    });
  }

  return (
    <ScrollContainer>
      {DATA_GUIDE_FAKE.map((item) => (
        <CardGuide
          pressViewDetails={() => handleGuideNavigation(item.id)}
          thumbnail={item.thumbnail}
          fullName={item.fullName}
          age={item.age}
          city={item.city}
          description={item.description}
          achievements={item.achievements}
          specialties={item.specialties}
        />
      ))}
    </ScrollContainer>
  );
};

export default Guides;
