import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/screenWrapper'
import randomImage from '../assets/images/randomImage'
import { colors } from '../theme'

export default function AddTripScreen() {
  return (
    <ScreenWrapper>
      <View className="mx-4 flex justify-between h-full">
        <View>
          <View className="mt-5 py-1 relative justify-center items-center">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className={`text-gray-400 text-xl font-bold`}>Add Trip</Text>
          </View>
          <View className="flex-row justify-center items-center mb-3">
            <Image source={randomImage()} className="h-80 w-80" />
          </View>
          <View className="from space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>Where On Earth?</Text>
            <TextInput className="bg-white p-4 shadow-sm rounded-full mb-3"  />
            <Text className={`${colors.heading} text-lg font-bold`}>Which Country?</Text>
            <TextInput className="bg-white p-4 shadow-sm rounded-full mb-9"  />
          </View>
          <TouchableOpacity className="bg-orange-400 rounded-full p-3 shadow-sm mx-2">
            <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
          </TouchableOpacity>
        </View>
        
      </View>
      
    </ScreenWrapper>
      
  )
}