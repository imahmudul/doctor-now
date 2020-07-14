import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import colors from '../config/colors';
import Constants from 'expo-constants';
import { useNetInfo } from '@react-native-community/netinfo';

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknwon" && netInfo.isInternetReachable === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No Internet Connection</Text>
      </View>
    );
  }
  return null;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    height: 50,
    position: 'absolute',
    zIndex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    top: Constants.statusBarHeight,
    width: '100%'
  },
  text: {
    color: colors.white,
  }
});

export default OfflineNotice;