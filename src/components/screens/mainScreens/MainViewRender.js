import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const MainViewRender = () => {
  const renderContent = () => {
    return (
      <View style={styles.container}>
        <Text>Main</Text>
      </View>
    )
  }

  return renderContent()
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default MainViewRender
