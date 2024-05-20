import { View, Text, FlatList,Image, TouchableOpacity, RefreshControl } from 'react-native'
import React, {useEffect, useState} from 'react'
import Icon from '@/constants/icon'
import Images from '@/constants/Images'
import EmptyState from './EmptyState'
import { getProductos } from '@/lib/appwrite'
import useAppwrite from '@/lib/useAppwrite'
import { router,Link } from 'expo-router'



const ListaInicio = ({imageStyle}:{imageStyle:any}) => {
 
  const {data: prendas} = useAppwrite(getProductos)
  const post = prendas.documents
  
  
  return (
    <  >  
    
    <FlatList
    contentContainerStyle={{ gap: 10, padding: 10 }}
    data={post}
    keyExtractor={(item) => item.$id} // this is necessary
    renderItem={({ item }) => 
   
    <Link href={{
          pathname: "/prendas",
          params: { id: item.$id }
        }}>
    
      <View>
      <Image className={`${imageStyle} rounded-xl `} source={{uri: item.imagen,}} />
      </View>


    </Link>   

   
    }
    ListEmptyComponent={()=>(
      <EmptyState/>
    )
  }
 
    horizontal
  >

  </FlatList>
    </>
  )
}

export default ListaInicio