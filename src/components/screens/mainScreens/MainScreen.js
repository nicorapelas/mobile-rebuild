import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Header from '../../common/Header'
import NavBar from '../../common/NavBar'

const Main = () => {
  const renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.mainViewContainer}>
          <Text>Main view</Text>
        </View>
        <View style={styles.navBarContainer}>
          <NavBar />
        </View>
      </View>
    )
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    flex: 40,
  },
  headerContainer: {
    flex: 3,
  },
  mainViewContainer: {
    backgroundColor: 'pink',
    flex: 33,
  },
  navBarContainer: {
    flex: 4,
  },
})

export default Main
