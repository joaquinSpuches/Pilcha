import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { getCurrentProduct } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import React, { useEffect, useState } from 'react'


const prendas = () => {

  const { id } = useLocalSearchParams()
  const [prenda, setPrenda] = useState()

  useEffect(() => {

    getCurrentProduct(id).then((res) => {
      if (res) {


        setPrenda(res[0])
        return res

      }

    })
  }, [])



  return (
    <ScrollView>
      <View className='h-[85vh] bg-white'>
        <Image source={
          prenda ? {
            uri: prenda.imagen,
          } : null
        } className='w-[auto] h-[367px] m-4' />
        <Text> {prenda ?
          prenda.vendedor.nombre
          : null} </Text>
        <View>
          <Image className='w-[62px] h-[62px] rounded-full' source={prenda ? { uri: prenda.vendedor.avatar } : null} />
          <Text></Text>
        </View>
        <Text> {prenda ? prenda.titulo : null} </Text>
      </View>
    </ScrollView>
  )
}

export default prendas