import React from 'react'
import { Center, VStack, Text } from 'native-base'

import Logo from '@assets/logo2x.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderAuthRoutes from '@components/HeaderAuthRoutes'
import Input from '@components/Input'

const SignIn = () => {
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
          <Input placeholder="Senha" />
        </VStack>
      </VStack>
    </SafeAreaView>
  )
}

export default SignIn
