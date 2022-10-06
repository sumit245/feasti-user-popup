import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
export default function ComingSoon() {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Icon name="campfire" size={64} color="#ff7600" />
      <Text
        style={{
          fontSize: 28,
          textAlign: 'center',
          marginVertical: 16,
          color: '#f36f00',
          padding: 16,
        }}
      >
        Cooking something delicious for you
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 16,
          color: '#a30300',
          paddingHorizontal: 16,
        }}
      >
        We are coming soon in your city
      </Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 8,
          color: '#030300',
          paddingHorizontal: 16,
          fontWeight: 'bold',
        }}
      >
        Stay Tuned !!!
      </Text>
    </SafeAreaView>
  );
}
