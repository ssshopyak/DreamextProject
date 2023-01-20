import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    letterSpacing: 0.5,
    fontFamily: 'Bold',
    fontSize: 36,
    color: '#000',
    textAlign: 'center',
  },
  input: {
    width: 300,
    height: 46,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#FFF',
    borderColor: '#DC143C',
    marginTop: 24,
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button_box: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
    alignItems: 'center',
  },
});
