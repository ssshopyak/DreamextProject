import {ShowError} from './ShowMessages';
import {GetPermissions} from './getPermissions';
var RNFS = require('react-native-fs');

const path = RNFS.DocumentDirectoryPath + '/postsData.json';
export const WriteJson = async postsData => {
  const granted = await GetPermissions();
  if (granted) {
    RNFS.writeFile(path, postsData, 'utf8')
      .then(() => {
        console.log('FILE WRITTEN!');
      })
      .catch(() => {
        ShowError('Filed to write file');
      });
  }
};

export const ReadJson = async ({setPosts, isNotInternet}) => {
  const granted = await GetPermissions();
  if (granted && isNotInternet) {
    RNFS.readFile(path, 'utf8')
      .then(res => {
        const postsData = JSON.parse(res);
        setPosts(postsData);
      })
      .catch(() => {
        ShowError('No saved posts');
      });
  }
};
