import { NativeBaseProvider } from 'native-base'
import { Text, StatusBar } from 'react-native'
import customThemeType from './src/styles/theme'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
  return (
    <NativeBaseProvider theme={customThemeType}>
      {fontsLoaded && (
        <Text>Open up App.tsx to start worsking on your app!</Text>
      )}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'light-content'}
      />
    </NativeBaseProvider>
  )
}
