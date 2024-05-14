import { View, Text } from 'react-native'
import React from 'react'

const FormField = ({title,value,placeholder,handleChangeText, ...props} ) => {
  return (
    <View className='space-y-2 justify-center align-middle w-full'>
      <Text className='text-base'> {title} </Text>
      <View className='border-b-2 w-screen h-10 border-gray-300'>
    </View>
    </View>
  )
}

export default FormField