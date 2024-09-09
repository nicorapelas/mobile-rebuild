import React, { useContext } from 'react'
import { View, StyleSheet, Dimensions } from 'react-native'
import {
  GestureHandlerRootView,
  PinchGestureHandler,
} from 'react-native-gesture-handler'
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  useAnimatedGestureHandler,
} from 'react-native-reanimated'
import { AntDesign } from '@expo/vector-icons'
import { Context as UniversalContext } from '../../context/UniversalContext'

const { width, height } = Dimensions.get('window')

const ZoomableImage = () => {
  const {
    state: { imageToViewUrl },
  } = useContext(UniversalContext)

  const scale = useSharedValue(1)

  const pinchGestureHandler = useAnimatedGestureHandler({
    onActive: (event) => {
      scale.value = event.scale
    },
    onEnd: () => {
      // Optional: Add an effect to reset scale back to default smoothly after pinch ends
      scale.value = withTiming(1, { duration: 300 })
    },
  })

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }))

  return (
    <GestureHandlerRootView style={styles.container}>
      <View style={styles.imageBed}>
        <View style={styles.closeButtonContainer}>
          <AntDesign name="closecircle" size={24} color="red" />
        </View>
        <PinchGestureHandler onGestureEvent={pinchGestureHandler}>
          <Animated.View style={{ flex: 1 }}>
            <Animated.Image
              source={{ uri: imageToViewUrl }}
              style={[styles.image, animatedStyle]}
              resizeMode="contain"
            />
          </Animated.View>
        </PinchGestureHandler>
      </View>
    </GestureHandlerRootView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageBed: {
    marginTop: '-20%',
  },
  closeButtonContainer: {
    justifyContent: 'flex-end',
  },
  image: {
    width: width,
    height: height,
  },
})

export default ZoomableImage
