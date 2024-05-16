import GlobalProvider from "../context/GlobalProvider"
import { Stack } from 'expo-router'
import { Text, View } from 'react-native'

const RootLayout = () => {

 
  
  

  return (
     <GlobalProvider >
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }}/>
      <Stack.Screen name='(auth)' options={{ headerShown: true, headerBackTitle:'Atras', headerTitle: '', headerTintColor: 'gray'}}/>
      <Stack.Screen name='(tabs)' options={{ headerShown: false, headerBackTitle:'Atras', headerTitle: '', headerTintColor: 'gray'}}/>
    </Stack>
   </GlobalProvider>  
      

  )
}

export default RootLayout

