import Snackbar from 'react-native-snackbar';

export const toShowError = title => {
  Snackbar.show({
    text: title,
    duration: Snackbar.LENGTH_LONG,
    textColor: 'rgba(227, 50, 50,0.5)',
  });
};
