import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'


const AuthRoutesLayout = ()=> {

  const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={"/(root)/(tabs)/home"} />
  }

  return (
      <Stack>
        <Stack.Screen name="welcome" options={{ headerShown: false }} />
        <Stack.Screen name="sign-up" options={{ headerShown: false }} />
        <Stack.Screen name="sign-in" options={{ headerShown: false }} />
      </Stack>
      
  );
}


export default AuthRoutesLayout;