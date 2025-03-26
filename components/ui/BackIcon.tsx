import React from 'react'
import Backicon from '@/assets/images/app/fe_arrow-left.svg'
import { ViewStyle } from 'react-native'

interface BackIconProps {
  color?: string
  style?: ViewStyle
}

export const BackIcon: React.FC<BackIconProps> = ({
  color = '#000',
  style
}) => {
  return <Backicon fill={color} style={[style]} />
}
