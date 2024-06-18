import React, { useContext, useEffect } from 'react'
import { View, StyleSheet } from 'react-native'

import TermsAndConditionsText from './burgerMenu/TermsAndConditionsText'
import SignOutConfirm from './burgerMenu/SignOutConfirm'
import DeleteAccountConfirm from './burgerMenu/DeleteAcountConfirm'
import { Context as BurgerMenuContext } from '../../context/BurgerMenuContext'

const InfoFullscreenRender = () => {
  const {
    state: { InfoToShow },
    setBurgerMenuVisible,
  } = useContext(BurgerMenuContext)

  useEffect(() => {
    if (InfoToShow !== '') {
      setBurgerMenuVisible(false)
    }
  }, [InfoToShow])

  const contentSelector = () => {
    switch (InfoToShow) {
      case 'terms':
        return <TermsAndConditionsText />
      case 'signOut':
        return <SignOutConfirm />
      case 'deleteAccount':
        return <DeleteAccountConfirm />
      default:
        break
    }
  }

  const renderContent = () => {
    return <View style={styles.container}>{contentSelector()}</View>
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default InfoFullscreenRender
