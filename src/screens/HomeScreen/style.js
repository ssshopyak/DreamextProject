import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(232, 240, 255)',
  },
  header: {
    position: 'absolute',
    top: 0,
    zIndex: 1,
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
  postsContainer: {
    width: '100%',
    backgroundColor: 'rgb(181, 208, 255)',
    borderRadius: 25,
    padding: 10,
    marginTop: 5,
  },
  centeredView: {
    maxHeight: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: 'white',
    padding: 5,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
