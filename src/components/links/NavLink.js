import React, { useContext } from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

import { Context as NavContext } from '../../context/NavContext'
import Spacer from '../common/Spacer'

const NavLink = ({ text, routeName }) => {
  const {
    state: { screenSelected },
  } = useContext(NavContext)

  const handlePress = () => {
    screenSelected({ routeName })
  }

  return (
    <Spacer>
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.link}>{text}</Text>
      </TouchableOpacity>
    </Spacer>
  )
}

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    color: 'blue',
    fontSize: 18,
  },
})

export default NavLink
