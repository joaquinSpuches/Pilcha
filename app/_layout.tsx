import useAppwrite from "@/lib/useAppwrite"
import GlobalProvider from "../context/GlobalProvider"
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'
import { getProductos } from '@/lib/appwrite'

const RootLayout = () => {

  const {data: prendas} = useAppwrite(getProductos)
  
  

  return (
     <GlobalProvider >
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }}/>
      <Stack.Screen name='(prendas)' options={{ headerShown: true, headerTitle: '',  }}/>
      <Stack.Screen name='(auth)' options={{ headerShown: true, headerBackTitle:'Atras', headerTitle: '', headerTintColor: 'gray'}}/>
      <Stack.Screen name='(tabs)' options={{ headerShown: false, headerBackTitle:'Atras', headerTitle: '', headerTintColor: 'gray'}}/>
    </Stack>
   </GlobalProvider>  
      

  )
}

export default RootLayout

