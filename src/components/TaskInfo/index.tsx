import { Text, View } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

interface TaskInfoProps {
  title: string;
  count: number;
  textColor?: string;
}

export function TaskInfo({ count, title, textColor = THEME.COLORS.BLUE }: TaskInfoProps) {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
      <View style={styles.contentCount}>
        <Text style={styles.countText}>{count}</Text>
      </View>
    </View>
  );
}
