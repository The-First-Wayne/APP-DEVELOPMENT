// LanguageSelection.tsx

import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type LanguageSelectionProps = NativeStackScreenProps<RootStackParamList, 'LanguageSelection'>;

interface Language {
  code: string;
  name: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'mr', name: 'मराठी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'or', name: 'ଓଡ଼ିଆ' },
  // Add more Indian languages as needed
];

const LanguageSelection: React.FC<LanguageSelectionProps> = ({ navigation }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>('en');

  const handleLanguageSelect = (code: string) => {
    setSelectedLanguage(code);
    navigation.navigate('AuthScreen', { selectedLanguage: code });
  };

  const renderItem = ({ item }: { item: Language }) => (
    <TouchableOpacity
      style={[
        styles.languageButton,
        selectedLanguage === item.code && styles.selectedLanguageButton,
      ]}
      onPress={() => handleLanguageSelect(item.code)}
    >
      <Text
        style={[
          styles.languageText,
          selectedLanguage === item.code && styles.selectedLanguageText,
        ]}
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Your Language</Text>
      <FlatList
        data={languages}
        renderItem={renderItem}
        keyExtractor={(item) => item.code}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 20,
    color: '#333',
  },
  list: {
    paddingBottom: 20,
  },
  languageButton: {
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 25,
    marginVertical: 8,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2, // This is for Android shadow
  },
  selectedLanguageButton: {
    backgroundColor: '#007BFF',
    borderColor: '#007BFF',
  },
  languageText: {
    fontSize: 18,
    color: '#333',
  },
  selectedLanguageText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
});

export default LanguageSelection;
