import { View, Text } from 'react-native'
import React from 'react'
import { colors } from '../theme'

export default function ExpenseCard({item, bgColor}) {
  return (
    <View style={{backgroundColor: bgColor}} className={`p-3 mb-3 rounded-2xl px-5 flex-row justify-between items-center`}>
      <View>
        <Text className={`${colors.heading} font-bold`}>{item.title}</Text>
        <Text className={`${colors.heading} text-xs`}>{item.category}</Text>
      </View>
      <View>
      <Text className="">Rs {item.amount}</Text>
      </View>
      
    </View>
  )
}