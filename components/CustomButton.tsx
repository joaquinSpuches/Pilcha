import { TouchableOpacity, Text, Image,View } from 'react-native'
import React from 'react'


const CustomButton = ({ image, texto, handlePress, containerStyles, textStyles, isLoading }: { image: any, texto: string, handlePress: any, containerStyles: string, textStyles: any, isLoading: any }) => {


    return (
        <TouchableOpacity onPress={handlePress} className={` border-[1px] border-solid  rounded-full justify-center items-center  ${containerStyles}`} >
            <View className="flex flex-row items-center ">
                {
                    image ?<Image className="mr-2" source={image} />:null
                }
                <Text className={`text-center ${textStyles}`}>{texto}</Text>
            </View>
        </TouchableOpacity >
    )
}

export default CustomButton