import React from 'react'

import { IInputProps, Input as NativeBaseInput } from 'native-base'

type Props = {} & IInputProps

const Input = ({ ...rest }: Props) => {
  return (
    <NativeBaseInput
      bgColor={'gray.700'}
      borderWidth={1}
      borderColor={'transparent'}
      fontFamily={'body'}
      h={12}
      px={4}
      placeholderTextColor={'gray.400'}
      color={'gray.200'}
      fontSize={'md'}
      _focus={{
        borderColor: 'gray.300',
      }}
      {...rest}
    />
  )
}

export default Input
