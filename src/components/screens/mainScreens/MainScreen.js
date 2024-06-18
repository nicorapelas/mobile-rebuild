import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import InfoFullscreenRender from '../../common/InfoFullscreenRender'
import Header from '../../common/Header'
import NavBar from '../../common/NavBar'
import Menu from '../../common/menu/Menu'
import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'

const Main = () => {
  const {
    state: { InfoToShow },
  } = useContext(BurgerMenuContext)

  const renderContent = () => {
    console.log(`InfoToShow:`, InfoToShow)
    if (InfoToShow !== '') return <InfoFullscreenRender />
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Header />
        </View>
        <View style={styles.mainViewContainer}>
          {/* MainView content is nested in Menu */}
          <Menu />
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
