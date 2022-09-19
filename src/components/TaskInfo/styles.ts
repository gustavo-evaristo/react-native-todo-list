import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    color: THEME.COLORS.BLUE,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    marginRight: 10,
  },
  countText: {
    color: THEME.COLORS.GRAY_100,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    fontSize: THEME.FONT_SIZE.SM,
  },
  contentCount: {
    backgroundColor: THEME.COLORS.GRAY_400,
    borderRadius: 100,
    width: 25,
    height: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
