import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import LoaderFullScreen from '../../../../common/LoaderFullScreen'
import { Context as AttributeContext } from '../../../../../context/AttributeContext'
import AttributeCreateForm from './AttributeCreateForm'
import HeaderBackButtonLink from '../../../../links/HeaderBackButtonLink'

const AttributeCreateScreen = () => {
  const {
    state: { loading },
  } = useContext(AttributeContext)

  const renderContent = () => {
    if (loading || loading === null) return <LoaderFullScreen />
    return <AttributeCreateForm bit="attribute" />
  }

  return renderContent()
}

const styles = StyleSheet.create({
  heading: {
    color: '#ffff',
    fontSize: 22,
  },
  bed: {
    backgroundColor: '#232936',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
})

export default AttributeCreateScreen
