import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  
  })
  return (
    <SafeAreaView className='bg-white h-full  justify-center mx-2 w-full items-start '>
      <ScrollView>
        <View className=''>
          <Text className='text-[34pt] font-bold text-start text-primary mb-10'>Iniciar sesión</Text>
          <FormField
            title='Email'
            value={form.email}
            onChangeText={(value:any) => {
              return setForm({ ...form, email: value })
            }}
            keyboardType='email-address'
          />
          <FormField
            title='Password'
            value={form.password}
            onChangeText={(value:any) => setForm({ ...form, password: value })}
            
          />


          <TouchableOpacity >
            <Text className='text-gray-400 text-center mt-52 text-lg self-center'>¿Olvidaste tu contraseña?</Text>
          </TouchableOpacity>
          <CustomButton 
          texto='Iniciar sesión'
          handlePress={() => {router.push('/inicio')}}
          containerStyles= "w-4/5 py-4 self-center mt-2 "
          textStyles="text-lg"
          
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn