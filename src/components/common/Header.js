import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

import logo from '../../../assets/images/logo_w300px.png'

const Header = () => {
  const renderContent = () => {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} resizeMode="contain" />
        </View>
      </View>
    )
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  logo: {
    width: 150,
    height: 26,
    marginLeft: 10,
    justifyContent: 'flex-start',
  },
})

export default Header
