import {PermissionsAndroid} from 'react-native';
import {toShowError} from './errorSnackBar';

export const getPermissions = async () => {
  try {
    const granted = await PermissionsAndroid.requestMultiple([
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    ]);

    const isGrantedPermisions =
      Object.values(granted)[0] &&
      Object.values(granted)[1] === PermissionsAndroid.RESULTS.GRANTED;

    if (isGrantedPermisions) {
      return true;
    } else {
      toShowError('permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
