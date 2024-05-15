import { View, Text, TouchableOpacity, Alert } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../components/FormField'
import CustomButton from '../../components/CustomButton'
import { Link, router } from 'expo-router'
import { createUser } from '@/lib/appwrite'

const SignUp = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',


  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit =async () => {
    if(!form.name || !form.email || !form.password || !form.repeatPassword) {
      Alert.alert('Todos los campos son requeridos')
    }
    setIsSubmitting(true)
    try{
        const result = await createUser(form.email, form.password, form.name)
      
        // marcarlo como estado global (global state)....
        
        router.push('/inicio')
        
    }catch(error){
      console.error(error)
      Alert.alert('Error al crear la cuenta')
    }finally{
      setIsSubmitting(false)
    }
 
    
  }
  return (
    <SafeAreaView className='bg-white h-[100%] w-[100%]'>
      <Text className='text-[34px] font-bold text-start text-black mx-4'>Crea tu cuenta</Text>
      <View className='flex-1 flex-col  justify-around mx-4'>
        <View>
          <FormField
            title='Nombre'
            value={form.name}
            placeholder='Nombre'
            otherStyles=''
            handleChangeText={(value: string) => {
              return setForm({ ...form, name: value })
            }}
            keyboardType='default'
          />
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
            keyboardType='password'
          />
          <FormField
            placeholder='Repite la contraseña'
            title='password'
            otherStyles=''
            value={form.repeatPassword}
            handleChangeText={(value: any) => setForm({ ...form, repeatPassword: value })}
            keyboardType='password'
          />
        </View>
        <View>
        <View >
            <Text className='text-gray-400 text-center  text-sm  self-center'>¿Ya tienes una cuenta? <Link href="/sign-in" className='text-blue-500 underline'><Text>Inicia sesión </Text> </Link></Text>
          </View>
          <CustomButton
            image={null}
            texto='Registrarse'
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

export default SignUp