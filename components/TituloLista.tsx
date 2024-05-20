import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from '@/constants/icon'

const TituloLista = ({titulo}:{titulo:string}) => {
  return (
    <View className=' px-2 mt-3 flex flex-col'>
       <TouchableOpacity className='flex flex-row justify-between items-center'>
  <Text className='text-xl text-start -m-1 font-semibold'> {titulo} </Text>
  <Image source={Icon.arrow} />
  </TouchableOpacity>

   </View>
  )
}

export default TituloLista