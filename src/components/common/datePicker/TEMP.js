import React, { useState } from 'react'
import { View, Button, Text, StyleSheet, Modal, Picker } from 'react-native'

const YearPickerComponent = () => {
  const [year, setYear] = useState(new Date().getFullYear())
  const [show, setShow] = useState(false)

  const showYearpicker = () => {
    setShow(true)
  }

  const handleYearChange = (itemValue) => {
    setYear(itemValue)
    setShow(false)
  }

  const years = []
  for (let i = 1900; i <= new Date().getFullYear(); i++) {
    years.push(i)
  }

  return (
    <View style={styles.container}>
      <View style={styles.pickerContainer}>
        <Button onPress={showYearpicker} title="Show year picker!" />
      </View>
      <Modal
        transparent={true}
        visible={show}
        animationType="slide"
        onRequestClose={() => setShow(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Picker
              selectedValue={year}
              onValueChange={handleYearChange}
              style={{ height: 200, width: 100 }}
            >
              {years.map((year) => (
                <Picker.Item key={year} label={String(year)} value={year} />
              ))}
            </Picker>
          </View>
        </View>
      </Modal>
      <Text style={styles.text}>Selected Year: {year}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  pickerContainer: {
    justifyContent: 'center',
    width: '100%',
    marginBottom: 20,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    marginTop: 20,
    fontSize: 16,
  },
})

export default YearPickerComponent
