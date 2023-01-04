import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    marginBottom: 10,
  },
  input: {
    width: 300,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    borderColor: 'rgba(0,0,0,0.3)',
    marginTop: 24,
    color: 'rgba(0,0,0,0.7)',
  },
  wrongInput: {
    color: 'rgba(0,0,0,0.7)',
    width: 300,
    height: 38,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: 'rgba(227, 50, 50,0.2)',
    borderColor: 'rgba(227, 50, 50,0.5)',
    marginTop: 24,
  },
  buttonLabel: {
    color: 'white',
  },
  text: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 18,
  },
  button_box: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
});
