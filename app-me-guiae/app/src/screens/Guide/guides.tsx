import { useNavigation } from '@react-navigation/native'
import React from 'react'

import CardGuide from '../../components/CardGuide/CardGuide'
import ScrollContainer from '../../components/ScrollContainer'

import { DATA_GUIDE_FAKE } from './data'

interface PropsType {
  id: number
  thumbnail: string
  fullName: string
  age: number
  city: string
  description: string
  achievements: string
  specialties: string
  cape: string
  routes: string
  value: number
}

const Guides: React.FC = () => {
  const navigation = useNavigation()

  const handleGuideNavigation: React.FC<[PropsType]> = ({}) => {
    // navigation.navigate('DetailsGuide')
  }

  return (
    <ScrollContainer>
      {DATA_GUIDE_FAKE.map(item => (
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
  )
}

export default Guides
