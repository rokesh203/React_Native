import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = '';
          switch (route.name) {
            case 'login': iconName = 'person-circle-outline'; break;
            case 'sign-in': iconName = 'log-in-outline'; break;
            case 'bus-update': iconName = 'bus-outline'; break;
            case 'explore': iconName = 'compass-outline'; break;
            case 'scanner': iconName = 'qr-code-outline'; break;
            default: iconName = 'ellipse-outline';
          }
          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#2563eb',
      })}
    />
  );
}
