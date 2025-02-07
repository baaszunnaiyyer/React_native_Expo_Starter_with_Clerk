import { View, Text, ScrollView, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { icons, images } from '@/constants'
import InputField from '@/components/InputField'
import CustomButton from '@/components/Custombutton'
import { Link, router } from 'expo-router'
import OAuth from '@/components/OAuth'
import { useSignUp } from '@clerk/clerk-expo'
import { ReactNativeModal } from 'react-native-modal'

const signUp = () => {

  const { isLoaded, signUp, setActive } = useSignUp()

  const [showSuscessModal, setshowSuscessModal] = useState(false)

  const [form, setForm] = useState({
    name:"",
    email:"",
    password:""
  })

  const [verification, setVerification] = useState({
    state: 'default',
    error: '',
    code: "",
  });


  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress : form.email,
        password : form.password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // Set 'pendingVerification' to true to display second form
      // and capture OTP code
      setVerification({
        ...verification,
        state: 'pending'
      })

    } catch (err) {
      Alert.alert('Error',err.errors[0].longMessage)
    }
  }

  const onVerifyPress = async () => {
    if (!isLoaded) return;

    try {
      // Use the code the user provided to attempt verification
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === 'complete') {

        await setActive({ session: signUpAttempt.createdSessionId })
        setVerification({...verification, state:"success"});
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.'
        setVerification({...verification, error:'Verification Failed' , state:'failed'});
        console.error(JSON.stringify(signUpAttempt, null, 2))
      }
    } catch (err) {
      setVerification({...verification, error:err.errors[0].longMessage , state:'failed'});
    }
  }


 

  return (
    <ScrollView className='flex-1 bg-white'>
      <View className='flex-1 bg-white'>
        <View className='relative w-full h-[250px]'>
          <Image source={images.signUpCar} className='z-0 w-full h-[250px]'/>
          <Text className='text-2xl text-black font-JakartaSemiBold absolute bottom-5 left-5 '>Create Your Account</Text>
        </View>
        <View className='p-5'>
          <InputField label={"Name"} placeholderTextColor='gray' placeholder="Enter Your Name" icon={icons.person} value={form.name} onChangeText={(value) => setForm({...form, name: value,})}/>
          <InputField label={"Email"} placeholderTextColor='gray' placeholder="Enter Your Emai" icon={icons.email} value={form.email} onChangeText={(value) => setForm({...form, email: value,})}/>
          <InputField label={"Password"} secureTextEntry={true} placeholderTextColor='gray' placeholder="Enter Your Name" icon={icons.lock} value={form.password} onChangeText={(value) => setForm({...form, password: value,})}/>

          <CustomButton title='Sign Up' onPress={onSignUpPress} className='mt-6'/>

          {/* OAuth */}

          <OAuth/>

          <Link className='text-lg text-center text-general-200 mb-5' href={'/sign-in'}>
            <Text>Already Have an account?</Text>
            <Text className='text-primary-500'>Log In</Text>
          </Link>

          {/* Verification Model */}

          <ReactNativeModal 
          isVisible={verification.state === "pending"} 
          onModalHide={() => {
            if(verification.state === "success") setshowSuscessModal(true)
          }}>
            <View className='bg-white px-7 py-9 rounded-2xl min-h-[350px]'>
              <Text className='text-2xl font-JakartaBold mb-2'>
                Verification
              </Text>
              <Text>
                we've sent eamil to {form.email}
              </Text>

              <InputField 
              label='Code' 
              icon={icons.lock} 
              placeholder='12345' 
              placeholderTextColor='gray'  
              value={verification.code} 
              onChangeText={(code) => setVerification({...verification, code: code})} />

              {verification.error && (
              <Text className='text-red-500 text-sm mt-10'>
                {verification.error}
              </Text>
              )}

              <CustomButton title='Verify Email' onPress={onVerifyPress} className='mt-5 bg-success-500'/>

            </View>

            
          </ReactNativeModal>

          <ReactNativeModal isVisible={showSuscessModal}>
            <View className='flex items-center justify-center bg-white p-7 py-9 rounded-2xl min-h-[300px]'>
              <Image source={images.check} className='w-[110px] h-[110px]'/>
              <Text className='text-3xl font-JakartaBold text-center'>Verified</Text>
              <Text className='text-base text-gray-400 font-Jakarta text-center mt-2'>You have sucessfully Verified your account</Text>
              <CustomButton title='Browse Home' onPress={()=> {
                setshowSuscessModal(false);
                router.push("/(root)/(tabs)/home")
              }} 
                className='mt-10'/>
            </View>
          </ReactNativeModal>

        </View>
      </View>
    </ScrollView>
  )
}

export default signUp