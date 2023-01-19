import React from 'react';
import Barcode from '@kichiyaki/react-native-barcode-generator';
import {Dimensions} from 'react-native';

export const BarcodeComponent = ({value}) => {
  return (
    <Barcode
      format="EAN13"
      value={value}
      text={`Your barcode: ${value}`}
      width={500}
      height={150}
      maxWidth={Dimensions.get('window').width / 1.5}
    />
  );
};
