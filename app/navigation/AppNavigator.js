import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListingEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import FeedNavigator from './FeedNavigator';
import NewListingButton from './NewListingButton';
import AccountNavigator from './AccountNavigator';
import routes from '../navigation/routes';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { navigation } from './rootNavigation';
import useNotification from '../hooks/useNotification';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {

  useNotification();

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.FEED}
        component={FeedNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="home" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name={routes.LISTING_EDIT}
        component={ListingEditScreen}
        options={({ navigation }) => ({
          tabBarButton: () => <NewListingButton onPress={() => navigation.navigate("ListingEdit")} />,
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="plus-circle" color={color} size={size} />
        })}
      />

      <Tab.Screen
        name={routes.ACCOUNT}
        component={AccountNavigator}
        options={{
          tabBarIcon: ({ color, size }) =>
            <MaterialCommunityIcons name="account" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  );

};

export default AppNavigator;