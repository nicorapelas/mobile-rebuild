import React, { useContext } from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'

import { Context as BurgerMenuContext } from '../../../context/BurgerMenuContext'

const SignOut = () => {
  const { setInfoToShow } = useContext(BurgerMenuContext)

  const handlePress = () => {
    setInfoToShow('signOut')
  }

  const button = () => {
    return (
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.buttonText}>Sign out</Text>
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

export default SignOut
