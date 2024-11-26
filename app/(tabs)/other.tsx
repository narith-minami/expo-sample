import React, { useState } from 'react';
import { StyleSheet, TextInput, Switch, Platform, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function FormScreen() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('personal');
  const [notifications, setNotifications] = useState(false);
  
  const colorScheme = useColorScheme();
  const textColor = useThemeColor({}, 'text');
  const backgroundColor = useThemeColor({}, 'background');
  const tintColor = useThemeColor({}, 'tint');

  const handleSubmit = () => {
    console.log({
      name,
      email,
      category,
      notifications,
    });
    alert('Form submitted!');
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#E8D0F5', dark: '#2D1B33' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#9370DB"
          name="doc.text.fill"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Sample Form</ThemedText>
      </ThemedView>

      <ThemedView style={styles.formContainer}>
        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Name</ThemedText>
          <TextInput
            style={[
              styles.input,
              {
                color: textColor,
                backgroundColor: backgroundColor,
                borderColor: textColor,
              },
            ]}
            value={name}
            onChangeText={setName}
            placeholder="Enter your name"
            placeholderTextColor={textColor + '80'}
          />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Email</ThemedText>
          <TextInput
            style={[
              styles.input,
              {
                color: textColor,
                backgroundColor: backgroundColor,
                borderColor: textColor,
              },
            ]}
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            placeholderTextColor={textColor + '80'}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </ThemedView>

        <ThemedView style={styles.inputContainer}>
          <ThemedText type="subtitle">Category</ThemedText>
          <ThemedView
            style={[
              styles.pickerContainer,
              {
                borderColor: textColor,
              },
            ]}>
            <Picker
              selectedValue={category}
              onValueChange={(itemValue) => setCategory(itemValue)}
              style={[
                styles.picker,
                {
                  color: textColor,
                },
              ]}>
              <Picker.Item label="Personal" value="personal" />
              <Picker.Item label="Business" value="business" />
              <Picker.Item label="Other" value="other" />
            </Picker>
          </ThemedView>
        </ThemedView>

        <ThemedView style={styles.switchContainer}>
          <ThemedText type="subtitle">Enable Notifications</ThemedText>
          <Switch
            value={notifications}
            onValueChange={setNotifications}
            trackColor={{ false: '#767577', true: tintColor }}
            thumbColor={notifications ? '#ffffff' : '#f4f3f4'}
          />
        </ThemedView>

        <Pressable
          style={({ pressed }) => [
            styles.submitButton,
            {
              backgroundColor: tintColor,
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={handleSubmit}>
          <ThemedText style={styles.submitButtonText}>Submit</ThemedText>
        </Pressable>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  formContainer: {
    gap: 16,
    padding: 16,
  },
  inputContainer: {
    gap: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  pickerContainer: {
    borderWidth: 1,
    borderRadius: 8,
    overflow: 'hidden',
  },
  picker: {
    height: 40,
    marginHorizontal: Platform.OS === 'ios' ? -8 : 0,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  submitButton: {
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
