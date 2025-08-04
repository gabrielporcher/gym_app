
import { Icon } from '@/components';
import { colors } from '@/components/styles';
import { Tabs } from 'expo-router';
import React from 'react';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.active,
        tabBarInactiveTintColor: colors.inactive
      }}>
      <Tabs.Screen
        name="MainScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Icon name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="WorkoutsScreen"
        options={{
          title: 'Workouts',
          tabBarIcon: ({ color }) => <Icon name="fitness" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProgressScreen"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color }) => <Icon name="trending-up" color={color} />,
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <Icon name="person" color={color} />,
        }}
      />
    </Tabs>
  );
}
