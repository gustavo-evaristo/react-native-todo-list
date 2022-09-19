import { useState } from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { THEME } from '../../theme';
import { styles } from './styles';

export function Input(props: TextInputProps) {
  const [isFocus, setIsFocus] = useState(false);

  function handleBorder() {
    setIsFocus((state) => !state);
  }

  return (
    <TextInput
      {...props}
      style={[styles.input, isFocus && styles.withBorder]}
      placeholder="Adicione uma nova tarefa"
      placeholderTextColor={THEME.COLORS.GRAY_300}
      onFocus={handleBorder}
      onBlur={handleBorder}
    />
  );
}
