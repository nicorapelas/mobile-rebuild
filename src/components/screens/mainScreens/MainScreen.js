import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import InfoFullscreenRender from '../../common/InfoFullscreenRender'
import Header from '../../common/Header'
import NavBar from '../../common/navbar/NavBar'
import Menu from '../../common/menu/Menu'
import BannerAdFullRender from '../../../advertisements/bannerAdsFull/BannerAdFullRender'
import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'
import { Context as AuthContext } from '../../../context/AuthContext'
import { Context as AdvertisementContext } from '../../../context/AdvertisementContext'

const Main = () => {
  const {
    state: { user },
  } = useContext(AuthContext)

  const {
    state: { InfoToShow },
  } = useContext(BurgerMenuContext)

  const {
    state: { bannerAdFullShow },
    setBannerAdFullShow,
  } = useContext(AdvertisementContext)

  useEffect(() => {
    if (bannerAdFullShow) {
      const timer = setTimeout(() => {
        setBannerAdFullShow(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [bannerAdFullShow])

  console.log(`user:`, user)

  const renderContent = () => {
    if (bannerAdFullShow) return <BannerAdFullRender />
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
    flex: 33,
  },
  navBarContainer: {
    flex: 4,
  },
})

export default Main
