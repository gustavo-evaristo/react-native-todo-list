import { StatusBar } from 'react-native';
import { Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black, useFonts } from '@expo-google-fonts/inter';
import { Loading } from './src/components';
import { Home } from './src/screens/Home';

export default function App() {
  const [fontsLoading] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, Inter_900Black });

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      {fontsLoading ? <Home /> : <Loading />}
    </>
  );
}
