import Constants from 'expo-constants';

const settings = {
  dev: {
    apiUrl: "http://192.168.1.104:3001/api"
  },
  staring: {
    apiUrl: "http://192.168.1.104:3001/api"
  },
  prod: {
    apiUrl: "http://192.168.1.104:3001/api"
  }
}

const getCurrentSettings = () => {
  if (__DEV__) return settings.dev;
  if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
  return settings.prod;
}

export default getCurrentSettings();