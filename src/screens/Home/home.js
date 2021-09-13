import React from 'react'

import ScrollContainer from '../../components/ScrollContainer'
import CardTip from '../../components/CardTip'

import { DB } from '../../services/FakeAPI'

const Home = ({ navigation }) => {
  function handleGuideNavigation(id) {
    navigation.navigate('Guides', {
      id
    })
  }

  function handleTipNavigation(id) {
    navigation.navigate('Tip', {
      id
    })
  }

  return (
    <ScrollContainer>
      {DB.map(item => (
        <CardTip
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
  )
}

export default Home
