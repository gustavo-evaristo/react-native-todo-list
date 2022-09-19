import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: THEME.COLORS.GRAY_600,
  },
  content: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
  },
  contentInput: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: '-7%',
  },
  contetTags: {
    marginTop: 10,
    width: '100%',
    backgroundColor: 'red',
  },
  contentTaskInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 32,
    paddingBottom: 20,
  },
  taskInfoBorderBottom: {
    borderBottomWidth: 0.5,
    borderBottomColor: THEME.COLORS.GRAY_400,
  },
  contentTasks: {
    flex: 1,
    alignItems: 'center',
  },
  contentEmptyTasks: {
    marginTop: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleEmptyTasks: {
    marginTop: 16,
    marginBottom: 2,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.BOLD,
    color: THEME.COLORS.GRAY_300,
  },
  descriptionEmptyTasks: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
    color: THEME.COLORS.GRAY_300,
  },
});
