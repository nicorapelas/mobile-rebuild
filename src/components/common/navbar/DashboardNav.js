import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Context as NavContext } from '../../../context/NavContext'
import { normalize } from '../../../utils/fontUtils'

const DashboardNav = () => {
  const {
    state: { navTabSelected },
    setNavTabSelected,
  } = useContext(NavContext)

  const handlePress = () => {
    setNavTabSelected('dashboard')
  }

  const renderContent = () => {
    return (
      <TouchableOpacity style={styles.container} onPress={handlePress}>
        <Text
          style={
            navTabSelected === 'dashboard' ? styles.textActive : styles.text
          }
        >
          Dashboard
        </Text>
      </TouchableOpacity>
    )
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  icon: {
    color: '#c4c4c2',
    fontSize: normalize(21),
    textAlign: 'center',
  },
  text: {
    color: '#c4c4c2',
    textAlign: 'center',
    fontSize: normalize(10),
  },
  iconActive: {
    color: 'black',
    fontSize: normalize(21),
    textAlign: 'center',
  },
  textActive: {
    color: 'black',
    textAlign: 'center',
    fontSize: normalize(10),
  },
})

export default DashboardNav
