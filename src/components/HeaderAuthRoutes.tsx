import React, { ReactNode } from 'react'
import { Center, Heading, VStack, Text } from 'native-base'

type Props = {
  logo: ReactNode
  title: string
  subtitle: string
}

const HeaderAuthRoutes = ({ logo, title, subtitle }: Props) => {
  return (
    <VStack>
      <Center>
        {logo}
        <Heading color={'gray.100'}>{title}</Heading>
        <Text fontSize={'sm'} color={'gray.300'}>
          {subtitle}
        </Text>
      </Center>
    </VStack>
  )
}

export default HeaderAuthRoutes
