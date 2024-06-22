import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import InfoFullscreenRender from '../../common/InfoFullscreenRender'
import Header from '../../common/Header'
import NavBar from '../../common/navbar/NavBar'
import Menu from '../../common/menu/Menu'
import BannerAdFullRender from '../../../advertisements/bannerAdsFull/BannerAdFullRender'
import LoaderFullScreen from '../../common/LoaderFullScreen'
import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'
import { Context as AuthContext } from '../../../context/AuthContext'
import { Context as AdvertisementContext } from '../../../context/AdvertisementContext'

const Main = () => {
  const {
    state: { user },
    signout,
  } = useContext(AuthContext)

  const {
    state: { InfoToShow },
    setInfoToShow,
  } = useContext(BurgerMenuContext)

  const {
    state: { bannerAdFullShow },
    setBannerAdFullShow,
  } = useContext(AdvertisementContext)

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        signout()
      }, 10000)
      return () => clearTimeout(timer)
    }
  }, [user])

  useEffect(() => {
    if (user) {
      const { termsAndConditionsAccepted } = user
      if (!termsAndConditionsAccepted) {
        setInfoToShow('initTerms')
      }
    }
  }, [user])

  useEffect(() => {
    if (bannerAdFullShow) {
      const timer = setTimeout(() => {
        setBannerAdFullShow(false)
      }, 5000)
      return () => clearTimeout(timer)
    }
  }, [bannerAdFullShow])

  const renderContent = () => {
    if (!user) return <LoaderFullScreen />
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
