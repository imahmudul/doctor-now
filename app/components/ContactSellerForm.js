import React from 'react';
import { Keyboard, Alert } from 'react-native';
import messageApi from '../api/message';
import { Notifications } from 'expo';

function ContactSellerForm({ listing }) {
  const hadleSubmit = async ({ message }, { resetform }) => {
    Keyboard.dismiss();

    const result = await messageApi.send(message, listing.id);

    if (!result.ok) {
      console.log("Error", result);
      return Alert.alert("Error", "Could not send the to the user");
    }

    resetform();

    Notifications.presentLocalNotificationAsync({
      title: "Awesome!",
      body: "Your message was sent to the seller.",
    });
  }
}

export default ContactSellerform;