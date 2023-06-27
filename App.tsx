import { NativeBaseProvider } from 'native-base'
import { StatusBar } from 'react-native'
import customThemeType from './src/styles/theme'
import {
  useFonts,
  Karla_400Regular,
  Karla_700Bold,
} from '@expo-google-fonts/karla'
import Routes from '@routes/index'

export default function App() {
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })
  return (
    <NativeBaseProvider theme={customThemeType}>
      {fontsLoaded && <Routes />}
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
    </NativeBaseProvider>
  )
}
