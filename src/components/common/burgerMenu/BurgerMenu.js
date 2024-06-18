import React, { useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from 'react-native'
import Constants from 'expo-constants'
import { Overlay } from 'react-native-elements'
import { Entypo, Ionicons } from '@expo/vector-icons'

import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'

import TermsAndConditionsBurgerButton from './TermsAndConditionsBurgerButton'
import Affiliate from './Affiliate'
import SignOut from './SignOut'
import DeleteAccount from './DeleteAccount'
import Managment from './managment/Managment'

const BurgerMenu = () => {
  const {
    state: {
      burgerMenuVisible,
      termAndConditionsVisible,
      signOutMessageVisible,
      deleteAccountMessageVisible,
      affiliateInfoVisible,
      managmentMenuVisible,
    },
    setBurgerMenuVisible,
    setTermsAndConditionVisible,
    setSignOutMessageVisible,
    setAffiliateInfoVisible,
    setManagmentMenuVisible,
    getLatestAppVersion,
  } = useContext(BurgerMenuContext)

  const appVersion = Constants.manifest?.version || '1.0.0'

  useEffect(() => {
    getLatestAppVersion()
  }, [])

  const handlePress = () => {
    setBurgerMenuVisible(!burgerMenuVisible)
  }

  const burgerMenuButton = () => {
    return (
      <TouchableOpacity style={styles.burgerMenuIconBed} onPress={handlePress}>
        <Entypo name="menu" style={styles.burgerMenuIcon} />
      </TouchableOpacity>
    )
  }

  return burgerMenuButton()
}

const styles = StyleSheet.create({
  burgerMenuIconBed: {
    height: 30,
    alignSelf: 'flex-end',
    flexDirection: 'column',
  },
  burgerMenuIcon: {
    color: Platform.OS === 'android' ? '#7ac6fa' : '#3ba7ee',
    fontSize: 33,
    alignSelf: 'flex-end',
    paddingRight: 7,
    paddingBottom: 2,
  },
  burgerMenuNoteIconBed: {
    height: 30,
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
  menuNoteDot: {
    borderColor: 'red',
    borderWidth: 5,
    borderRadius: 25,
    alignSelf: 'center',
    marginRight: -12,
    zIndex: 1,
  },
  burgerMenuCloseButton: {
    color: '#F9B321',
    fontSize: 30,
    alignSelf: 'flex-end',
  },
  burgerMenuOption: {
    backgroundColor: '#278ACD',
    borderColor: '#ffff',
    alignSelf: 'center',
    width: '80%',
    borderWidth: 2,
    borderRadius: 7,
    marginVertical: 3,
    padding: 7,
  },
  burgerMenuOptionText: {
    color: '#ffff',
    fontSize: 16,
    textAlign: 'center',
  },
  modal: {
    backgroundColor: 'transparent',
    elevation: 0,
    shadowOpacity: 0,
  },
  versionText: {
    color: '#ffff',
    textAlign: 'center',
    marginVertical: 2,
  },
})

export default BurgerMenu
