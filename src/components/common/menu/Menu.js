import React, { useRef, useContext, useEffect } from 'react'
import { View, Animated, StyleSheet, Dimensions, Platform } from 'react-native'

import MainViewRender from '../../screens/mainScreens/mainView/MainViewRender'
import TermsAndConditionsBurgerButton from '../burgerMenu/TermsAndConditionsBurgerButton'
import SignOut from '../burgerMenu/SignOut'
import DeleteAccount from '../burgerMenu/DeleteAccount'
import AppVersion from '../burgerMenu/AppVersion'
import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'

const { width } = Dimensions.get('window')

const Menu = () => {
  const slideAnim = useRef(new Animated.Value(width)).current // Initially off-screen

  const {
    state: { burgerMenuVisible },
  } = useContext(BurgerMenuContext)

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: !burgerMenuVisible ? width : 0, // Slide in or out
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [burgerMenuVisible])

  return (
    <View style={styles.container}>
      {/* Main View Content */}
      <MainViewRender />
      <Animated.View
        style={[styles.menu, { transform: [{ translateX: slideAnim }] }]}
      >
        <TermsAndConditionsBurgerButton />
        <SignOut />
        <DeleteAccount />
        <AppVersion />
      </Animated.View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  menuIcon: {
    margin: 20,
    zIndex: 2, // Ensures the menu icon is above other components
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: width * 0.75, // Adjust the width as needed
    backgroundColor: '#232936',
    padding: 20,
    borderLeftWidth: 3,
    borderLeftColor: Platform.OS === 'android' ? '#7ac6fa' : '#3ba7ee',
    borderBottomWidth: 3,
    borderBottomColor: Platform.OS === 'android' ? '#7ac6fa' : '#3ba7ee',
    borderTopWidth: 3,
    borderTopColor: Platform.OS === 'android' ? '#7ac6fa' : '#3ba7ee',
    borderBottomLeftRadius: 10,
    zIndex: 1, // Ensures the menu is above the main content
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
  },
})

export default Menu
