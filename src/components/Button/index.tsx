import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';

export function Button(props: TouchableOpacityProps) {
  return (
    <TouchableOpacity {...props} style={styles.container} activeOpacity={0.7}>
      <AntDesign name="pluscircleo" size={15} color="#fff" />
    </TouchableOpacity>
  );
}
