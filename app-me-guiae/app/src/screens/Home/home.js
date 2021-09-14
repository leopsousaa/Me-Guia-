import React from "react";

import ScrollContainer from "../../components/ScrollContainer";
import CardRoute from "../../components/CardRoute";

import { DB } from "../../services/FakeAPI";

const Home = ({ navigation }) => {
  function handleTipNavigation(id) {
    navigation.navigate("Tip", {
      id,
    });
  }

  function handleGuideNavigation(id) {
    navigation.navigate("Guides", {
      id,
    });
  }

  return (
    <ScrollContainer>
      {DB.map((item) => (
        <CardRoute
          key={item.id}
          title={item.name}
          time={item.time}
          distance={item.distance}
          rating={item.rating}
          pressViewGuides={() => handleGuideNavigation(item.id)}
          pressViewTip={() => handleTipNavigation(item.id)}
        />
      ))}
    </ScrollContainer>
  );
};

export default Home;
