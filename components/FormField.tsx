import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import icon from '@/constants/icon'

const FormField = ({title,value,placeholder,handleChangeText,otherStyles,keyboardType}:{title:string, value:string, placeholder:string,otherStyles:string ,handleChangeText:any,keyboardType:string} ) => {
  
  const [showPassword, setShowPassword] = useState(false)
  
  return (
    <View className={`space-y-2 justify-center   align-middle w-full ${otherStyles}`}>
     
      <View className='border-b-[1px] flex-row items-center  h-10 flex border-gray-300'>
        <TextInput 
        className='flex-1 text-[17px] '
        value={value}
        placeholder={placeholder}
        onChangeText={handleChangeText}
        secureTextEntry={title === 'password' ? !showPassword: false}
        />
        {title === 'password' ?(
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <View className='text-gray-400 text-sm'>{showPassword ? <Image source={icon.show} />  : <Image source={icon.hide} />}</View>
          </TouchableOpacity>
        ):null}
    </View>
    </View>
  )
}

export default FormField