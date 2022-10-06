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
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 16,
          color: '#f36f00',
          padding: 16,
        }}
      >
        Cooking something delicious for you.
      </Text>
      <View>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'justify',
            marginTop: 16,
            color: '#000600',
            paddingHorizontal: 16,
            fontWeight: 'bold',
          }}
        >
          Get Notified
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'justify',
            marginVertical: 0,
            color: '#000600',
            paddingHorizontal: 16,
            fontWeight: 'bold',
          }}
        >
          When we launch
        </Text>
      </View>
    </SafeAreaView>
  );
}
