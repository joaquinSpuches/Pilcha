import { View, Text } from 'react-native'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

const PrendasLayout = () => {
  return (
    <>
      <Stack>
        <Stack.Screen
          
          name='prendas'
          options={{
            headerShown: false,
            
          }} />
              
       
      </Stack>
        <StatusBar backgroundColor="#fff" style='light' />
      
    </>
  )
}

export default PrendasLayout