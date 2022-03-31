import React from 'react'

import ScrollContainer from '../../components/ScrollContainer'
import CardRoute from '../../components/CardRoute'

import { DB } from '../../services/FakeAPI'

const Home = ({ navigation }) => {
  function handleRouteNavigation(id, image, title, time, distance, rating) {
    navigation.navigate('Details Route', {
      id,
      image,
      title,
      time,
      distance,
      rating
    })
  }

  function handleGuideNavigation(id) {
    navigation.navigate('Guides', {
      id
    })
  }

  return (
    <ScrollContainer>
      {DB.map(item => (
        <CardRoute
          key={item.id}
          image={item.image}
          title={item.name}
          time={item.time}
          distance={item.distance}
          rating={item.rating}
          pressViewGuides={() => handleGuideNavigation(item.id)}
          pressViewRoute={() => handleRouteNavigation(item.id)}
        />
      ))}
    </ScrollContainer>
  )
}

export default Home
