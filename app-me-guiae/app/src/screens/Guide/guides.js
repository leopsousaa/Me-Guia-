import React from "react";

import CardGuide from "../../components/CardGuide/CardGuide";
import ScrollContainer from "../../components/ScrollContainer";

import { DATA_GUIDE_FAKE } from "./data";

const Guides = ({ navigation }) => {
  function handleGuideNavigation(
    id,
    thumbnail,
    fullName,
    age,
    city,
    description,
    achievements,
    specialties,
    cape,
    routes,
    value
  ) {
    navigation.navigate("Details Guide", {
      id,
      thumbnail,
      fullName,
      age,
      city,
      description,
      achievements,
      specialties,
      cape,
      routes,
      value,
    });
  }

  return (
    <ScrollContainer>
      {DATA_GUIDE_FAKE.map((item) => (
        <CardGuide
          key={item.id}
          pressViewDetails={() =>
            handleGuideNavigation(
              item.id,
              item.thumbnail,
              item.fullName,
              item.age,
              item.city,
              item.description,
              item.achievements,
              item.specialties,
              item.cape,
              item.routes,
              item.value
            )
          }
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
