import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from 'expo-status-bar';
import { BookOpen, Search, User, MessageCircle } from 'lucide-react-native';

import HomeScreen from './src/screens/HomeScreen';
import ClassScreen from './src/screens/ClassScreen';
import SubjectScreen from './src/screens/SubjectScreen';
import TopicScreen from './src/screens/TopicScreen';
import AIScreen from './src/screens/AIScreen';
import ProfileScreen from './src/screens/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator 
      screenOptions={{
        headerStyle: { backgroundColor: '#1e1b4b' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Stack.Screen name="HomeMain" component={HomeScreen} options={{ title: 'OnlineStudyHub' }} />
      <Stack.Screen name="Class" component={ClassScreen} options={({ route }) => ({ title: route.params.label })} />
      <Stack.Screen name="Subject" component={SubjectScreen} options={({ route }) => ({ title: route.params.label })} />
      <Stack.Screen name="Topic" component={TopicScreen} options={({ route }) => ({ title: route.params.title })} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#f97316',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarStyle: { backgroundColor: '#1e1b4b', borderTopWidth: 0 },
          headerShown: false,
        }}
      >
        <Tab.Screen 
          name="Learn" 
          component={HomeStack} 
          options={{
            tabBarIcon: ({ color, size }) => <BookOpen color={color} size={size} />,
          }}
        />
        <Tab.Screen 
          name="AI Help" 
          component={AIScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <MessageCircle color={color} size={size} />,
          }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{
            tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
          }}
        />
      </Tab.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  );
}
