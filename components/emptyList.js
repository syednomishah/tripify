import { View, Text, Image } from 'react-native'
import React from 'react'

export default function EmptyList() {
  return (
    <View className="flex justify-center items-center my-5">
      <Image className="h-52 w-52 shadow" source={require('../assets/images/empty.png')} />
      <Text className="font-bold text-gray-400">You haven't recorded any trips yet!</Text>
    </View>
  )
}