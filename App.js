import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import All from './screens/All';
import Business from './screens/Business';
import HealthScreen from './screens/Health';
import SportsScreen from './screens/Sports';
import TechScreen from './screens/Tech';
import { Icon } from 'react-native-elements';
import Login from './Login'; // Importing the Login component

const Tab = createBottomTabNavigator();

export default function App() {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogin = () => {
    // Setting the authenticated state to true upon successful login
    setAuthenticated(true);
  }

  return (
    <NavigationContainer>
      {authenticated ? (
        <Tab.Navigator>
          <Tab.Screen name="World News Headlines" component={All}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="home" color={props.color} />
              ),
            }}
          />
          <Tab.Screen name="Business News Headlines" component={Business}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="dollar-sign" color={props.color} />
              ),
            }}
          />
          <Tab.Screen name="Health News Headlines" component={HealthScreen}
            options={{
              tabBarIcon: (props) => (
                <Icon type="feather" name="heart" color={props.color} />
              ),
            }}
          />
          <Tab.Screen name="Sports News Headlines" component={SportsScreen}
            options={{
              tabBarIcon: (props) => (
                <Icon type="ionicon" name="baseball-outline" color={props.color} />
              ),
            }}
          />
          <Tab.Screen name="Tech" component={TechScreen}
            options={{
              tabBarIcon: (props) => (
                <Icon type="ionicon" name="laptop-outline" color={props.color} />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        // Providing the login page when not authenticated
        <Login onLogin={handleLogin} />
      )}
    </NavigationContainer>
  );
}
