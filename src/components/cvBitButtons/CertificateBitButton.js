import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native'
import { Feather, Octicons } from '@expo/vector-icons'

import { Context as CertificateContext } from '../../context/CertificateContext'
import { Context as NavContext } from '../../context/NavContext'

const CertificateBitButton = () => {
  const [counter, setCounter] = useState(0)

  const {
    state: { loading, certificateStatus, certificates, certificateStatusInitFetchDone },
    fetchCertificates,
    fetchCertificateStatus,
    setCertificateInitStatusFetchDone,
  } = useContext(CertificateContext)

  const { setCVBitScreenSelected } = useContext(NavContext)

  useEffect(() => {
    if (!certificateStatusInitFetchDone) {
      fetchCertificates()
      fetchCertificateStatus()
      setCertificateInitStatusFetchDone(true)
    }
  }, [certificateStatusInitFetchDone])

  useEffect(() => {
    if (certificates && counter < 2) {
      setCounter(counter + 1)
    }
  }, [certificates])

  const renderStatusLoader = () => {
    return <ActivityIndicator size="small" color="#ededed" />
  }

  const renderStatus = () => {
    if (loading)
      return <View style={styles.statusBed}>{renderStatusLoader()}</View>
    return (
      <View style={styles.statusBed}>
        {certificateStatus === '0' ? (
          <>
            <Text style={styles.percentage}>
              <Feather name="circle" size={24} />
            </Text>
            <Octicons style={styles.redDot} name="dot-fill" />
          </>
        ) : null}
        {certificateStatus > 0 ? (
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
    setCVBitScreenSelected('certificate')
  }

  return (
    <View style={styles.bed}>
      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.title}>certificates</Text>
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

export default CertificateBitButton
