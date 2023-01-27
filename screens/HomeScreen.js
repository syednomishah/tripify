import { View, Text, StatusBar, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/screenWrapper'
import { colors } from '../theme'
import EmptyList from '../components/emptyList'
import { useNavigation } from '@react-navigation/native'
import randomImage from '../assets/images/randomImage'
import { useSelector } from 'react-redux'

export default function HomeScreen() {
  const navigation = useNavigation();
  let trips = useSelector(state=> state.trip.trips);
  return (
    <ScreenWrapper className="flex-1">
      <View className="p-4 mb-4 pb-0 flex-row justify-between items-center">
        <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>Tripify</Text>
        <TouchableOpacity onPress={()=> navigation.navigate('addTrip')}  className="p-2 px-3 bg-white border border-gray-200 rounded-full">
          <Text className={`${colors.heading}`}>Add Trip</Text>
        </TouchableOpacity>
      </View>
      <View className="flex justify-center items-center mb-4 bg-blue-200 rounded-xl mx-4">
        <Image source={require('../assets/images/banner.png')} className="w-60 h-60"/>
      </View>
      <View className="px-4 space-y-4">
        <Text className={`${colors.heading} font-bold text-xl `}>Recent Trips</Text>
        <View className="" style={{height: 430}}>
          <FlatList
            data={trips}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            numColumns={2}
            ListEmptyComponent={<EmptyList message="You haven't recorded any trips yet!" />}
            columnWrapperStyle={{
              justifyContent: 'space-between'
            }}
            className="mx-1"
            renderItem={({item}) => {
              return (
                  <TouchableOpacity onPress={()=> navigation.navigate('tripExpenses', {...item})} className="shadow-sm bg-white p-3 mb-3 rounded-2xl">
                    <View>
                      <Image className=" w-36 h-36 mb-2" source={randomImage()} />
                      
                      <Text className={`font-bold ${colors.heading}`}>{item.place}</Text>
                      <Text className={`text-xs ${colors.heading}`}>{item.country}</Text>
                    </View>
                  </TouchableOpacity>
              )
            }}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

    </ScreenWrapper>
      
  )
}