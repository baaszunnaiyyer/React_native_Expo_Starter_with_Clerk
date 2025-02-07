import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'


const AuthRoutesLayout = ()=> {


  return (
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
      
  );
}


export default AuthRoutesLayout;