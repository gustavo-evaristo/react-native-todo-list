import { Image, SafeAreaView, Text, View } from 'react-native';
import Logo from '../../assets/logo.png';
import { styles } from './styles';

export function Header() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image source={Logo} style={styles.logo} />
        <Text>
          <Text style={styles.textLogo}>to</Text>
          <Text style={styles.textLogoSpan}>do</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
