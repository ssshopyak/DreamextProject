import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 70,
    width: '100%',
    backgroundColor: 'rgb(130,176,255)',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },
  icon: {
    width: 30,
    height: 30,
    marginHorizontal: 10,
  },
  logo: {
    marginHorizontal: 10,
    fontSize: 24,
    color: 'rgba(0,0,0,0.7)',
  },
});
