import React, { useContext, useEffect } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'
import { Context as AuthContext } from '../../../context/AuthContext'

const DeleteAccount = () => {
  const { setBurgerMenuVisible, setInfoToShow } = useContext(BurgerMenuContext)

  const {
    state: { apiMessage },
    signout,
  } = useContext(AuthContext)

  useEffect(() => {
    if (apiMessage) {
      if (apiMessage.success === 'User successfully deleted') {
        setTimeout(() => {
          setBurgerMenuVisible(false)
          setInfoToShow('')
          signout()
        }, 3500)
      }
    }
  }, [apiMessage])

  const handlePress = () => {
    console.log(`yebo`)
    setInfoToShow('deleteAccount')
  }

  const button = () => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>Delete my account</Text>
      </TouchableOpacity>
    )
  }

  return button()
}

const styles = StyleSheet.create({
  buttonText: {
    color: '#ffff',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 15,
  },
})

export default DeleteAccount
