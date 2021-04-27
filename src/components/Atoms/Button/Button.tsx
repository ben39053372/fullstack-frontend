import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'

export interface ButtonProps {
  text: string
  onPress(event: GestureResponderEvent): void
}

export function Button(props: ButtonProps) {
  return (
    <TouchableOpacity onPress={(e) => props.onPress}>
      <Text>{props.text}</Text>
    </TouchableOpacity>
  )
}
