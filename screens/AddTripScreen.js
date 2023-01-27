import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import BackButton from '../components/backButton'
import ScreenWrapper from '../components/screenWrapper'
import randomImage from '../assets/images/randomImage'
import { colors } from '../theme'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import { addTrip } from '../redux/slices/trip'

export default function AddTripScreen() {
  const [country, setCountry] = useState('');
  const [place, setPlace] = useState('');
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleAddTripe = ()=>{
    if(country && place){
      dispatch(addTrip({
        id: new Date().getTime(),
        country,
        place
      }));
      navigation.navigate('home');
    }
  }

  return (
    <ScreenWrapper>
      <View className="mx-4 flex justify-between h-full">
        <View>
          <View className="mt-5 py-1 relative justify-center items-center">
            <View className="absolute top-0 left-0">
              <BackButton />
            </View>

            <Text className={`${colors.heading} text-xl font-bold`}>Add Trip</Text>
          </View>
          <View className="flex-row object-fill justify-center items-center mb-3">
            <Image source={require('../assets/images/4.png')} className="h-72 w-72" />
          </View>
          <View className="from space-y-2 mx-2">
            <Text className={`${colors.heading} text-lg font-bold`}>Where On Earth?</Text>
            <TextInput onChangeText={value=> setPlace(value)} value={place} className="bg-white p-4 shadow-sm rounded-full mb-3"  />
            <Text className={`${colors.heading} text-lg font-bold`}>Which Country?</Text>
            <TextInput onChangeText={value=> setCountry(value)} value={country} className="bg-white p-4 shadow-sm rounded-full mb-9"  />
          </View>
          
        </View>

        <TouchableOpacity onPress={handleAddTripe} className="bg-orange-400 my-6 rounded-full p-3 shadow-sm mx-2">
          <Text className="text-center text-white text-lg font-bold">Add Trip</Text>
        </TouchableOpacity>
        
      </View>

      
    </ScreenWrapper>
      
  )
}