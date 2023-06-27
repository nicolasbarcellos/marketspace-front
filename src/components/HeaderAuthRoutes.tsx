import React from 'react'
import { Center, Heading, VStack, Text } from 'native-base'

type Props = {
  logo: any
  title: string
  subtitle: string
}

const HeaderAuthRoutes = ({ logo, title, subtitle }: Props) => {
  return (
    <VStack>
      <Center>
        {logo}
        <Heading>{title}</Heading>
        <Text>{subtitle}</Text>
      </Center>
    </VStack>
  )
}

export default HeaderAuthRoutes
