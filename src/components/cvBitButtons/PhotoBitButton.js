import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Feather, Octicons } from '@expo/vector-icons'

import { Context as PhotoContext } from '../../context/PhotoContext'
import { Context as NavContext } from '../../context/NavContext'

const PhotoBitButton = () => {
  const [counter, setCounter] = useState(0)

  const {
    state: { loading, photoStatus, photos, photoStatusInitFetchDone },
    fetchPhotoStatus,
    assignPhoto,
    setPhotoStatusInitFetchDone,
  } = useContext(PhotoContext)

  const { setCVBitScreenSelected } = useContext(NavContext)

  useEffect(() => {
    if (!photoStatusInitFetchDone) {
      fetchPhotoStatus()
      setPhotoStatusInitFetchDone(true)
    }
  }, [photoStatusInitFetchDone])

  useEffect(() => {
    if (photos && counter < 2) {
      setCounter(counter + 1)
    }
  }, [photos])

  useEffect(() => {
    if (counter === 1) {
      autoAssignPhoto()
    }
  }, [counter])

  const autoAssignPhoto = () => {
    if (!photos || photos.length < 1) {
      return null
    }
    if (photos.length === 1) {
      assignPhoto(photos[0]._id)
      return
    }
    const previousAssignedPhoto = photos.filter((photo) => {
      return photo.assigned === true
    })
    if (previousAssignedPhoto.length < 1) {
      return null
    } else {
      assignPhoto(previousAssignedPhoto[0]._id)
    }
  }

  const renderStatusLoader = () => {
    return <ActivityIndicator size="small" color="#ededed" />
  }

  const renderStatus = () => {
    if (loading)
      return <View style={styles.statusBed}>{renderStatusLoader()}</View>
    return (
      <View style={styles.statusBed}>
        {photoStatus === '0' ? (
          <>
            <Text style={styles.percentage}>
              <Feather name="circle" size={24} />
            </Text>
            <Octicons style={styles.redDot} name="dot-fill" />
          </>
        ) : null}
        {photoStatus > 0 ? (
          <>
            <Text style={styles.percentage}>
              <Feather name="check-circle" size={24} />
            </Text>
            <Octicons style={styles.greenDot} name="dot-fill" />
          </>
        ) : null}
      </View>
    )
  }

  const handlePress = () => {
    setCVBitScreenSelected('photo')
  }

  return (
    <View style={styles.bed}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.title}>photo</Text>
      </TouchableOpacity>
      {renderStatus()}
    </View>
  )
}

const styles = StyleSheet.create({
  bed: {
    backgroundColor: '#3498db',
    width: '95%',
    height: 50,
    marginTop: 5,
    alignSelf: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 4,
  },
  button: {
    alignItems: 'center',
    flex: 6,
    justifyContent: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    fontWeight: '600',
  },
  statusBed: {
    backgroundColor: '#2c3e50',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: 'row',
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  percentage: {
    color: '#3498db',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  redDot: {
    color: '#e74c3c',
    fontSize: 25,
    marginRight: 5,
  },
  orangeDot: {
    color: '#f39c12',
    fontSize: 25,
    marginRight: 5,
  },
  yellowDot: {
    color: '#f1c40f',
    fontSize: 25,
    marginRight: 5,
  },
  greenDot: {
    color: '#2ecc71',
    fontSize: 25,
    marginRight: 5,
  },
})

export default PhotoBitButton
