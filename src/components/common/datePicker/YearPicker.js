import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import { Context as UniversalContext } from '../../../context/UniversalContext'
import { Context as SecondEduContext } from '../../../context/SecondEduContext'
import { Context as TertEduContext } from '../../../context/TertEduContext'
import { Context as EmployHistoryContext } from '../../../context/EmployHistoryContext'

const YearPicker = ({ bit, buttonText, incomingYearSelected }) => {
  const [condensedYearArray, setCondensedYearArray] = useState([])

  const {
    state: { yearPickerShow, startDateToCompare, yearSelected },
    setYearPickerShow,
    setYearPickerProps,
    clearYearPickerProps,
    setYearSelected,
  } = useContext(UniversalContext)

  const { clearSecondEduErrors } = useContext(SecondEduContext)
  const { clearTertEduErrors } = useContext(TertEduContext)
  const { clearEmployHistoryErrors } = useContext(EmployHistoryContext)

  const yearsArray = []
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    yearsArray.push(i)
  }

  useEffect(() => {
    console.log(`yearSelected:`, yearSelected)
    setYearPickerProps({ bit, yearSelected })
  }, [yearSelected])

  useEffect(() => {
    if (yearPickerShow === false) {
      clearYearPickerProps()
    }
  }, [yearPickerShow])

  useEffect(() => {
    if (startDateToCompare) {
      const condensedArray = yearsArray.filter((year) => {
        return year > startDateToCompare
      })
      setCondensedYearArray(condensedArray)
    }
  }, [startDateToCompare])

  const handlePressYearSelect = (data) => {
    console.log(data.toString())
    setYearSelected(data.toString())
    setYearPickerShow(false)
  }

  const CustomPicker = () => {
    return (
      <View style={styles.pickerBed}>
        <ScrollView style={styles.scrollPicker}>
          {(condensedYearArray.length > 0 && bit === 'endDate'
            ? condensedYearArray
            : yearsArray
          ).map((year) => (
            <TouchableOpacity
              key={year}
              style={styles.pickerItem}
              onPress={() => handlePressYearSelect(year)}
            >
              <Text style={styles.pickerItemText}>{year}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    )
  }

  const showPickerButton = () => {
    return (
      <TouchableOpacity
        style={styles.dummyInput}
        onPress={() => {
          setYearPickerShow(true)
          setYearPickerProps({ bit })
          clearSecondEduErrors()
          clearTertEduErrors()
          clearEmployHistoryErrors()
        }}
      >
        <Text
          style={
            !incomingYearSelected ? styles.dummyInputText : styles.inputText
          }
        >
          {!yearSelected ? buttonText : yearSelected}
        </Text>
      </TouchableOpacity>
    )
  }

  const renderContent = () => {
    if (!yearPickerShow) {
      return showPickerButton()
    }
    return CustomPicker()
  }

  return renderContent()
}

const styles = StyleSheet.create({
  dummyInput: {
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    alignItems: 'center',
    height: 50,
    width: '85%',
    borderRadius: 7,
    margin: 5,
  },
  dummyInputText: {
    color: '#B6B8BA',
    marginTop: 17,
  },
  inputText: {
    marginTop: 17,
  },
  pickerBed: {
    backgroundColor: '#ffff',
    borderRadius: 7,
    margin: 20,
  },
  scrollPicker: {
    maxHeight: 200,
  },
  pickerItem: {
    padding: 10,
    alignItems: 'center',
  },
  pickerItemText: {
    fontSize: 18,
    color: '#1a1a1a',
  },
})

export default YearPicker
