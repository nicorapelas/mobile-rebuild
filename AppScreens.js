import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Context as NavContext } from './src/context/NavContext'

import RegisterOrLoginScreen from './src/components/screens/authScreens/RegisterOrLoginScreen'
// import RegisterEmailScreen from './src/components/screens/authScreens/RegisterEmailScreen'

const AppScreens = () => {
  const {
    state: { screenSelected },
  } = useContext(NavContext)

  const screenSelector = () => {
    switch (screenSelected) {
      case 'registerOrLogin':
        return <RegisterOrLoginScreen />
      // case 'registerEmail':
      //   return <RegisterEmailScreen />
      default:
        break
    }
  }

  return <View style={styles.container}>{screenSelector()}</View>
}

export default AppScreens

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
