import { Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { THEME } from '../../theme';
import { styles } from './styles';

interface TaskCardProps {
  completed?: boolean;
  taskDescription: string;
  handleDelete?: () => void;
  handleCompleted?: () => void;
}

export function TaskCard({ completed = false, taskDescription, handleDelete, handleCompleted }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <Octicons
        name={completed ? 'check-circle' : 'circle'}
        size={20}
        color={completed ? THEME.COLORS.PURPLE : THEME.COLORS.BLUE}
        onPress={handleCompleted}
      />

      <View style={styles.taskDescriptionContainer}>
        <Text numberOfLines={2} style={[styles.taskDescription, completed && styles.taskDescriptionChecked]}>
          {taskDescription}
        </Text>
      </View>

      <Octicons name="trash" size={20} color={THEME.COLORS.GRAY_300} onPress={handleDelete} />
    </View>
  );
}
