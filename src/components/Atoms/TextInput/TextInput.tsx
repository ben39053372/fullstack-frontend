import React from 'react'
import { TextInput as _TextInput, StyleSheet } from 'react-native'
import { TextInputProps } from '.';

export function TextInput(props: TextInputProps) {
  return (
    <_TextInput {...props} style={[textInputStyle.container, props.style]} />
  )
}

const textInputStyle = StyleSheet.create({
  container: {
    backgroundColor: '#ddd',
    padding: 10,
    borderRadius: 8,
  }
})