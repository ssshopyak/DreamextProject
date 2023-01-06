import {PermissionsAndroid} from 'react-native';
import {ShowError} from './ShowMessages';

export const GetPermissions = async () => {
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
      ShowError('permission denied');
      return false;
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
