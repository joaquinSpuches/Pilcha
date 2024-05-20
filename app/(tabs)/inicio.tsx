import { View, Text, FlatList, Image,ScrollView ,TouchableOpacity, TextInput, RefreshControl } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Icon  from '@/constants/icon'
import ListaInicio from '@/components/ListaInicio'
import TituloLista from '@/components/TituloLista'
import { useState } from 'react'
import { getProductos } from '@/lib/appwrite'

import useAppwrite from '@/lib/useAppwrite'

const Inicio = () => {
  const [refreshing, setRefreshing] = useState(false)
  const {refetch} = useAppwrite(getProductos)
  const onRefresh = async() => {
    setRefreshing(true)
    await refetch()
    setTimeout(() => {
      setRefreshing(false)
    }, 2000)
  }
  return (
    <SafeAreaView className='bg-white w-full  h-screen '>
     
      
        {/** aqui debajo esta la barra de buscar */} 
     <View  className=' bg-gray-100  rounded-md my-3   h-9 px-3 mx-2 w-auto flex flex-row  items-center justify-between'>
     <View className='flex-row items-center px-2'>
     <Image source={Icon.search} />
     <TextInput className='text-[17px]  ' placeholderTextColor="#3C3C43"  placeholder='Buscar'/>
     </View>
      <Image source={Icon.microphone} />
     </View>
      
      <FlatList 
        contentContainerStyle={{justifyContent:'space-around', width: '100%', padding: 10}}
        data={[{ id: Icon.remera}, { id: Icon.pantalon },{ id: Icon.calzado}, { id:Icon.abrigo} ]}
        keyExtractor={(item) => item.$id} // this is necessar
        renderItem={({ item }) => <TouchableOpacity  className=''><Image source={item.id}  /></TouchableOpacity>}
        horizontal
        />
         <ScrollView  refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
         <TituloLista titulo='Destacados' />
      <ListaInicio imageStyle='w-[172px] h-[172px] '/>
      <TituloLista titulo='Recientes'/>
      <ListaInicio imageStyle='w-[172px] h-[172px]'/>
      <TituloLista titulo='Tus marcas favoritas'/>
      <ListaInicio  imageStyle='w-[112px] h-[112px]'/>
      <TituloLista titulo='Tus prendas favoritas'/>
      <ListaInicio  imageStyle='w-[112px] h-[112px]'/>
        
      
      
     
      </ScrollView>
    </ SafeAreaView>

  )
}

export default Inicio

