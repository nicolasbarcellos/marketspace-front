import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import AuthRoutes from './auth.routes'

import { Box, useTheme } from 'native-base'

function Routes() {
  const { colors } = useTheme()

  const theme = DefaultTheme
  theme.colors.background = colors.gray[600]

  return (
    <Box flex={1} color={'gray.600'}>
      <NavigationContainer theme={theme}>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  )
}

export default Routes
