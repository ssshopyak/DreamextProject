import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flex: 1,
  },
  title: {
    fontSize: 28,
    color: '#000',
    marginLeft: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  codeContainer: {
    marginTop: 30,
    alignSelf: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  underlineStyleBase: {
    fontSize: 24,
    color: '#DC143C',
    width: 40,
    height: 60,
    borderWidth: 0,
    borderBottomWidth: 2,
  },
  underlineStyleHighLighted: {
    borderColor: '#DC143C',
  },
  underTitle: {
    marginLeft: 10,
  },
  button_box: {
    flexDirection: 'row',
    marginBottom: 30,
    marginTop: 10,
    alignItems: 'center',
  },
});
