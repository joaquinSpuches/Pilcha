import { View, Text, FlatList, Image,ScrollView ,TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import  Icon  from '@/constants/icon'
import Destacados from '@/components/Destacados'

const Inicio = () => {
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
         <ScrollView >
      <Destacados title='Destacados'imageStyle=''/>
      <Destacados title='Recientes' imageStyle=''/>
      <Destacados title='Tus marcas favoritas' imageStyle='w-[112px] h-[112px]'/>
      <Destacados title='Tus prendas favoritas' imageStyle='w-[112px] h-[112px]'/>
        
      
      
     
      </ScrollView>
    </ SafeAreaView>

  )
}

export default Inicio