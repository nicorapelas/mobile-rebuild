import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native'

import AttributeBitButton from '../../../cvBitButtons/AttributeBitButton'
import CVBitScreenRender from '../CVBitScreens/CVBitScreenRender'
import { Context as NavContext } from '../../../../context/NavContext'

const DashboardScreen = () => {
  const {
    state: { CVBitScreenSelected },
  } = useContext(NavContext)

  const renderContent = () => {
    if (CVBitScreenSelected === '') {
      return (
        <View style={styles.container}>
          <AttributeBitButton />
        </View>
      )
    }
    return <CVBitScreenRender />
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
})

export default DashboardScreen
