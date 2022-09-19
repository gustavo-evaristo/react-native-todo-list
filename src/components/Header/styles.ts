import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.COLORS.GRAY_700,
    width: '100%',
    height: '23%',
    padding: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  content: {
    marginTop: -20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 19,
    height: 40,
    marginRight: 12,
  },
  textLogo: {
    color: THEME.COLORS.BLUE,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 40,
  },
  textLogoSpan: {
    color: THEME.COLORS.PURPLE_DARK,
    fontFamily: THEME.FONT_FAMILY.BLACK,
    fontSize: 40,
  },
});
