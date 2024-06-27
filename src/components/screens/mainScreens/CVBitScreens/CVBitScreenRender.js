import React, { useContext } from 'react'

import AttributeScreen from './attribute/AttributeScreen'
import AttributeCreateScreen from './attribute/AttributeCreateScreen'
import AttributeEditScreen from './attribute/AttributeEditScreen'
import { Context as NavContext } from '../../../../context/NavContext'

const CVBitScreenRender = () => {
  const {
    state: { CVBitScreenSelected },
  } = useContext(NavContext)

  const renderCVBitScreen = () => {
    switch (CVBitScreenSelected) {
      case 'attribute':
        return <AttributeScreen />
      case 'attributeCreate':
        return <AttributeCreateScreen />
      case 'attributeEdit':
        return <AttributeEditScreen />
      default:
        break
    }
  }

  return renderCVBitScreen()
}

export default CVBitScreenRender
