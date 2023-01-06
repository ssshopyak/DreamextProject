import Snackbar from 'react-native-snackbar';

export const ShowError = title => {
  Snackbar.show({
    text: title,
    duration: Snackbar.LENGTH_LONG,
    textColor: 'rgba(227, 50, 50,0.5)',
  });
};

export const ShowErrorOnPress = onPress => {
  Snackbar.show({
    text: 'An error occurred',
    duration: Snackbar.LENGTH_INDEFINITE,
    action: {
      text: 'Repeat the request',
      textColor: 'green',
      onPress: () => {
        onPress();
      },
    },
  });
};
