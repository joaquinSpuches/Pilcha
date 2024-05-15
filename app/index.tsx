import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView,Image, TouchableOpacity } from "react-native";
import { Redirect, router } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import Images from "../constants/Images"
import icon from "../constants/icon"
import CustomButton from "@/components/CustomButton";
export default function App() {
  return (
    <SafeAreaView className="bg-white  h-full">
      <ScrollView contentContainerStyle={{
        height: "100%",
      }}>
        <View className="w-full h-full justify-around items-center">
          <View className="w-full gap-y-12 justify-around items-center">
          <Text className="text-xl font-bold text-center px-16 text-primary">Encontra las mejores ofertas de ropa de segunda mano</Text>
          <Image source={Images.logo} />
          </View>
          <View className="flex flex-col w-full items-center ">
          <CustomButton 
          texto={ 'Continuar con Google'}
          image={icon.google}
          handlePress={() => {}}
          containerStyles= " w-4/5 py-3 border-gray-400 mb-4"
          textStyles="text-lg"
          isLoading={[]}
          />
           <CustomButton 
           
          image={icon.apple}
          texto='Continuar con Apple'
          handlePress={() => {}}
          containerStyles= "w-4/5 border-gray-400 py-3 "
          textStyles="text-lg"
          isLoading={[]}
          />
          <Image  source={Images.divisor} />
          <CustomButton 
            image={null}
            texto='Crear una cuenta'
            handlePress={() => {router.push('/sign-up')}}
            containerStyles= "w-4/5 py-3  bg-primary "
            textStyles="text-white text-lg"
          isLoading={[]}
          />
          <TouchableOpacity >
          <Text className="text-center text-gray-400 my-4">¿Ya tienes cuenta?</Text>
          </TouchableOpacity>
          <CustomButton 
          image={null}
          texto='Iniciar sesión'
          handlePress={() => {router.push('/sign-in')}}
          containerStyles= "w-4/5 border-primary py-3 "
          textStyles="text-lg text-primary"
          isLoading= 'false'
          />
          </View>
        </View>
      </ScrollView>
      
    </SafeAreaView>
  );
}
