import { View, Text, Image } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import Icon from '../../constants/icon'


const TabIcon = ({ icon, color, name, focused }: { icon: any, color: string, name: string, focused: boolean }) => {


  return (
    <View>
      <Image
        source={icon}
        resizeMode='contain'
        tintColor={'#014740'}
        style={{ tintColor: focused ? '#014740' : 'gray' }}
  
      />
    </View>
  )
}



const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={
          {

            tabBarActiveTintColor: '#014740',
            tabBarInactiveTintColor: 'gray',

          }
        }
      >
        <Tabs.Screen name="inicio"
          options={{
            title: 'Inicio',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Icon.inicio} color={color} name='Inicio' focused={focused} />
            )
          }} />
        <Tabs.Screen name="buscar"
          options={{
            title: 'Buscar',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Icon.lupa} color={color} name='Buscar' focused={focused} />
            )
          }} />
        <Tabs.Screen name="vender"
          options={{
            title: 'Vender',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Icon.boton_añadir} color={color} name='Vender' focused={focused} />
            )
          }} />
        <Tabs.Screen name="mensajes"
          options={{
            title: 'Mensajes',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Icon.mensajes} color={color} name='Mensajes' focused={focused} />
            )
          }} />
        <Tabs.Screen name="perfil"
          options={{
            title: 'Perfil',
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={Icon.perfil} color={color} name='Perfil' focused={focused} />
            )
          }} />
      </Tabs>
    </>
  )
}

export default TabsLayout