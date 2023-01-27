import { View, Text, Image, Touchable, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { categoryBG, colors } from '../theme'
import randomImage from '../assets/images/randomImage'
import ExpenseCard from '../components/expenseCard'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTrip, tripSlice } from '../redux/slices/trip'


export default function TripExpensesScreen({route}) {
  const {id} = route.params;
  const trip = useSelector(state=> selectTrip(state, id));
  const navigation = useNavigation();
  return (
    <ScreenWrapper>
      <View className="mx-4 flex justify-between h-full">
        <View>
          <View className="mt-5 py-1 relative justify-center items-center">
            <View className="absolute top-1 left-0">
              <BackButton />
            </View>
            <View className="flex items-center">
              <Text key={2} className={`${colors.heading} text-xl font-bold`}>{trip.place}</Text>
              <Text key={3} className={`text-xs`}>{trip.country}</Text>
            </View>
            
          </View>
          <View className="flex-row justify-center items-center mb-3">
            <Image source={randomImage()} className="h-80 w-80" />
          </View>
          <View className="flex-row justify-between items-center mb-3">
              <Text className={`${colors.heading} text-xl font-bold`}>Expenses</Text>
              <TouchableOpacity onPress={()=> navigation.navigate('addExpense', {...trip})} className="p-2 px-3 bg-white border border-gray-200 rounded-full">
                <Text className={colors.heading + ' font-bold'}>Add Expense</Text>
              </TouchableOpacity>
          </View>
          <View className="">
            <FlatList 
              data={trip.expenses || []} 
              renderItem={({item})=> <ExpenseCard item={item} bgColor={categoryBG[item.category]} />}
              keyExtractor={item=> item.id}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyList message="You haven't recorded any expenses yet!" />}
            />
          </View>
        </View>
        
      </View>
      
    </ScreenWrapper>
  )
}