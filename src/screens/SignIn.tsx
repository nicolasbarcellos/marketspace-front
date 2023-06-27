import React from 'react'
import { VStack } from 'native-base'

import Logo from '@assets/logo2x.svg'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderAuthRoutes from '@components/HeaderAuthRoutes'

const SignIn = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack flex={1}>
        <HeaderAuthRoutes
          logo={<Logo />}
          title="marketspace"
          subtitle="Seu espaço de compra e venda"
        />
      </VStack>
    </SafeAreaView>
  )
}

export default SignIn
