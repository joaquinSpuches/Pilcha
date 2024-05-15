import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { router } from 'expo-router'
import { signIn } from '@/lib/appwrite'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''

  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const submit =async () => {
    if(!form.email || !form.password ) {
      Alert.alert('Todos los campos son requeridos')
    }
    setIsSubmitting(true)
    try{
        await signIn(form.email, form.password)

        // marcarlo como estado global (global state)....

        router.replace('/inicio')
    }catch(error){
      console.error(error)
      Alert.alert('Error al crear la cuenta')
    }finally{
      setIsSubmitting(false)
    }
    
 
    
  }

  return (
   
    <SafeAreaView className='bg-white h-[100%] w-[100%]'>
      <Text className='text-[34px] font-bold text-start text-black mx-4'>Iniciar sesión</Text>
      <View className='flex-1 flex-col  justify-around mx-4'>
      <View>
          
          <FormField
            title='Email'
            value={form.email}
            placeholder='Email'
            otherStyles=''
            handleChangeText={(value: string) => {
              return setForm({ ...form, email: value })
            }}
            keyboardType='email-address'
          />
          <FormField
            placeholder='Contraseña'
            title='password'
            otherStyles=''
            value={form.password}
            handleChangeText={(value: any) => setForm({ ...form, password: value })}
            keyboardType=''
          />
        </View>
        <View>
          <TouchableOpacity >
            <Text className='text-gray-400 text-center  text-sm underline self-center'>¿Haz olvidado tu contraseña?</Text>
          </TouchableOpacity>
          <CustomButton
            image={null}
            texto='Iniciar sesión'
            handlePress={submit}
            containerStyles="w-4/5 py-3 border-primary self-center mt-2 "
            textStyles="text-lg text-primary"
            isLoading={isSubmitting}
          />
        </View>
      </View>

    </SafeAreaView>
     
  )
}

export default SignIn