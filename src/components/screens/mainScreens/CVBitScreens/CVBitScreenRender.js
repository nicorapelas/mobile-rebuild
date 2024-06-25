import React, { useContext } from 'react'

import AttributeScreen from './attribute/AttributeScreen'
import AttributeCreateScreen from './attribute/AttributeCreateScreen'
import { Context as NavContext } from '../../../../context/NavContext'

const CVBitScreenRender = () => {
  const {
    state: { CVBitScreenSelected },
  } = useContext(NavContext)

  console.log(CVBitScreenSelected)

  const renderCVBitScreen = () => {
    switch (CVBitScreenSelected) {
      case 'attribute':
        return <AttributeScreen />
      case 'attributeCreate':
        return <AttributeCreateScreen />
      default:
        break
    }
  }

  return renderCVBitScreen()
}

export default CVBitScreenRender
