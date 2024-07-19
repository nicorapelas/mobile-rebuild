import React, { useContext, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'

import LoaderFullScreen from '../../../../common/LoaderFullScreen'
import BitNoData from '../../../../common/BitNoData'
import AddContentButtonLink from '../../../../links/AddContentButtonLink'
import DoneButton from '../../../../links/DoneButton'
import DeleteModal from '../../../../common/modals/DeleteModal'
import { Context as PersonalSummaryContext } from '../../../../../context/PersonalSummaryContext'
import { Context as UniversalContext } from '../../../../../context/UniversalContext'
import { Context as NavContext } from '../../../../../context/NavContext'

const PersonalSummaryScreen = () => {
  const [documentId, setDocumentId] = useState('')

  const { showDeleteModal } = useContext(UniversalContext)

  const {
    state: { loading, personalSummary },
  } = useContext(PersonalSummaryContext)

  const { setCVBitScreenSelected } = useContext(NavContext)

  const renderSummary = () => {
    return (
      <>
        <DeleteModal id={documentId} bit="personalSummary" />
        <AddContentButtonLink
          routeName="personalSummaryCreate"
          text="add personal summary"
        />
        <>
          <View style={styles.contentBed}>
            {!content || content.length < 1 ? null : (
              <ScrollView style={styles.contentRow}>
                <Text style={styles.text}>{content}</Text>
              </ScrollView>
            )}
            <View style={styles.lastUpdateRow}>
              <MaterialIcons style={styles.lastUpdateIcon} name="watch-later" />
              <Text style={styles.LastUpdateText}>
                Last update: {new Date(lastUpdate).toLocaleDateString()}
              </Text>
            </View>
          </View>
          <View style={styles.buttonBed}>
            <TouchableOpacity
              style={styles.editButtonBed}
              onPress={() => console.log(`personal summary edit`)}
            >
              <MaterialCommunityIcons
                style={styles.actionButton}
                name="pencil"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.deleteButtonBed}>
              <MaterialCommunityIcons
                onPress={() => {
                  setDocumentId(_id)
                  showDeleteModal()
                }}
                style={styles.actionButton}
                name="delete"
              />
            </TouchableOpacity>
          </View>
        </>
        <DoneButton text="Done" routeName="" />
      </>
    )
  }

  const renderContent = () => {
    if (loading || !personalSummary) return <LoaderFullScreen />
    if (personalSummary.length < 1) {
      return (
        <BitNoData
          cvBit="personal summary"
          routeName="personalSummaryCreate"
          buttonText="add personal summary"
        />
      )
    }
    return renderSummary()
  }

  return <View style={styles.bed}>{renderContent()}</View>
}

const styles = StyleSheet.create({
  heading: {
    color: '#ffff',
    fontSize: 22,
  },
  bed: {
    backgroundColor: '#232936',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    padding: '5%',
  },
  contentBed: {
    backgroundColor: '#ffff',
    maxHeight: '70%',
    padding: 15,
    borderRadius: 7,
  },
  contentRow: {
    paddingTop: 5,
  },
  text: {
    width: '95%',
    fontSize: 18,
    paddingLeft: 5,
  },
  addressbed: {
    flexDirection: 'row',
    paddingTop: 5,
  },
  lastUpdateRow: {
    flexDirection: 'row',
    paddingTop: 20,
    fontSize: 5,
  },
  lastUpdateIcon: {
    paddingTop: 3,
  },
  LastUpdateText: {
    paddingLeft: 7,
  },
  buttonBed: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  editButtonBed: {
    backgroundColor: '#558dd8',
    borderRadius: 25,
  },
  deleteButtonBed: {
    backgroundColor: '#c35a44',
    borderRadius: 25,
  },
  actionButton: {
    fontSize: 30,
    color: '#ffff',
    padding: 7,
  },
})

export default PersonalSummaryScreen
