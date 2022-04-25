import React from 'react'

import CardTip from '../../components/CardTip'

import ScrollContainer from '../../components/ScrollContainer'

import { DATA } from './data'

const Tips = () => {
  return (
    <ScrollContainer>
      {DATA.map(item => (
        <CardTip
          key={item.id}
          name={item.name}
          title={item.title}
          description={item.description}
        />
      ))}
    </ScrollContainer>
  )
}

export default Tips
