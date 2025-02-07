import { Text, View } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo'
import { SafeAreaView } from 'react-native-safe-area-context';

const home = () => {
  const {user} = useUser();
  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  )
}

export default home

