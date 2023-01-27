import { View, Text, Image } from 'react-native'
import React from 'react'

export default function EmptyList({message}) {
  return (
    <View className="flex justify-center items-center my-5">
      <Image className="h-36 w-36 shadow" source={require('../assets/images/empty.png')} />
      <Text className="font-bold text-gray-400">{message}</Text>
    </View>
  )
}