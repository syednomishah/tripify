import { View, Text, Image, Touchable, TouchableOpacity, FlatList, TextInput } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '../components/screenWrapper'
import BackButton from '../components/backButton'
import { categoryBG, colors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { categories } from '../constants'
import { useDispatch } from 'react-redux'
import { addExpense } from '../redux/slices/trip'


export default function TripExpensesScreen({route}) {
  const trip = route.params;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const handleAddExpense = ()=>{
    if(title && amount && category){
      // good to go
      dispatch(addExpense({
        tripId: trip.id,
        expense: {
          id: new Date().getTime(),
          title, 
          amount, 
          category
        }
      }));
      navigation.navigate('tripExpenses', {...trip});
    }
  }
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
            <Image source={require('../assets/images/expenseBanner.png')} className="w-80 h-72" />
          </View>
          <View className="from space-y-2 mx-2 mb-3">
            <Text className={`${colors.heading} text-lg font-bold`}>For What?</Text>
            <TextInput onChangeText={value=>setTitle(value)} value={title} className="bg-white p-4 shadow-sm rounded-full mb-3"  />
            <Text className={`${colors.heading} text-lg font-bold`}>How Much?</Text>
            <TextInput onChangeText={value=>setAmount(value)} value={amount} className="bg-white p-4 shadow-sm rounded-full"  />
          </View>
          <View className="categories mx-2">
            <Text className={`${colors.heading} text-lg font-bold mb-1`}>Category</Text>
            <View className="flex-row flex-wrap items-center">
              {
                categories.map(cat=>{
                  let bgColor = cat.value==category? 'bg-green-200' : 'bg-white';

                  return (
                    <TouchableOpacity onPress={()=> setCategory(cat.value)} className={`p-3 px-4 rounded-full mr-2 mb-2 ${bgColor}`} key={cat.value}>
                      <Text>{cat.title}</Text>
                    </TouchableOpacity>
                  )
                })
              }
            </View>
          </View>

        </View>
        <View className="my-6">
            <TouchableOpacity onPress={handleAddExpense} className="bg-green-400 rounded-full p-3 shadow-sm mx-2">
              <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
            </TouchableOpacity>
          </View>
        
      </View>
      
    </ScreenWrapper>
  )
}