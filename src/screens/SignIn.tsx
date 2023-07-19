import React, { useState } from 'react'
import { VStack, Text, Icon } from 'native-base'

import Logo from '@assets/logo2x.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderAuthRoutes from '@components/HeaderAuthRoutes'
import Input from '@components/Input'
import { Pressable } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <HeaderAuthRoutes
          logo={<Logo />}
          title="marketspace"
          subtitle="Seu espaço de compra e venda"
        />
        <VStack
          px={12}
          space={4}
          justifyContent={'center'}
          alignItems={'center'}
        >
          <Text color={'gray.200'} fontSize={'sm'}>
            Acesse sua conta
          </Text>
          <Input placeholder="Email" />
          <Input
            placeholder="Senha"
            type={showPassword ? 'text' : 'password'}
            InputRightElement={
              <Pressable onPress={() => setShowPassword(!showPassword)}>
                <Icon
                  as={
                    <MaterialIcons
                      name={showPassword ? 'visibility' : 'visibility-off'}
                    />
                  }
                  size={6}
                  mr={2}
                />
              </Pressable>
            }
          />
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}

export default SignIn
