import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    width: 348,
    height: 64,
    borderRadius: 8,
    backgroundColor: THEME.COLORS.GRAY_500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: THEME.COLORS.GRAY_400,
    marginBottom: 8,
  },

  taskDescriptionContainer: {
    width: '78%',
  },

  taskDescription: {
    color: THEME.COLORS.GRAY_100,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },

  taskDescriptionChecked: {
    color: THEME.COLORS.GRAY_300,
    textDecorationLine: 'line-through',
  },
});
