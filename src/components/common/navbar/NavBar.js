import React, { useContext } from 'react'
import { StyleSheet, View, Platform } from 'react-native'
import { useKeyboard } from '@react-native-community/hooks'

import DashboardNav from './DashboardNav'

const NavBar = () => {
  const keyboard = useKeyboard()

  const renderContent = () => {
    if (keyboard.keyboardShown && Platform.OS !== 'ios') return null
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <DashboardNav />
        </View>
      </View>
    )
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffff',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
})

export default NavBar
