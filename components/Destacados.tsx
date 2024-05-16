import { View, Text, FlatList,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '@/constants/icon'
import Images from '@/constants/Images'

const Destacados = ({title,imageStyle}:{title:string,imageStyle:any}) => {
  return (
    <  >  
    <View className=' px-2 flex flex-col'>
       <TouchableOpacity className='flex flex-row justify-between items-center'>
  <Text className='text-xl text-start -m-1 font-semibold'> {title} </Text>
  <Image source={Icon.arrow} />
  </TouchableOpacity>

   </View>
    <FlatList
    contentContainerStyle={{ gap: 10, padding: 10 }}
    data={[{ id: Images.image  }, { id: Images.image }, { id: Images.image },{ id: Images.image }]}
    keyExtractor={(item) => item.$id} // this is necessar
    renderItem={({ item }) => <Image className={`${imageStyle}`} source={item.id} />}
    horizontal
  >

  </FlatList>
    </>
  )
}

export default Destacados