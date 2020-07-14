import { useEffect } from 'react';
import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';
import expoPushTokenApi from "../api/expoPushtokens";

export default useNotifications = (notificationListener) => {
  useEffect(() => {
    registerForPushNotifications();
    if (notificationListener) Notifications.addListener(notificationListener);
  }, []);


  const registerForPushNotifications = async () => {
    // console.log('hello from registerForPushNotifications');
    try {
      const permission = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      if (!permission.granted) return;

      const token = await Notifications.getExpoPushTokenAsync();
      expoPushTokenApi.register(token);

      console.log('token:', token);
    } catch (error) {
      console.log('Error getting a push token', error);
    }
  }
}