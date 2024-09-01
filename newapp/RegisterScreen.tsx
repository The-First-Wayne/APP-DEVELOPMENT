// RegisterScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type RegisterScreenProps = NativeStackScreenProps<RootStackParamList, 'RegisterScreen'>;

const translations = {
  en: { title: 'Register', name: 'Name', phone: 'Phone Number', address: 'Address', pincode: 'PinCode', register: 'Register' },
  hi: { title: 'पंजीकरण करें', name: 'नाम', phone: 'फोन नंबर', address: 'पता', pincode: 'पिन कोड', register: 'पंजीकरण करें' },
  ta: { title: 'பதிவு செய்க', name: 'பெயர்', phone: 'தொலைபேசி எண்', address: 'முகவரி', pincode: 'பின் குறியீடு', register: 'பதிவு செய்க' },
  te: { title: 'నమోదు', name: 'పేరు', phone: 'ఫోన్ నంబర్', address: 'చిరునామా', pincode: 'పిన్‌కోడ్', register: 'నమోదు' },
  kn: { title: 'ನೋಂದಣಿ', name: 'ಹೆಸರು', phone: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ', address: 'ವಿಳಾಸ', pincode: 'ಪಿನ್ ಕೋಡ್', register: 'ನೋಂದಣಿ' },
  mr: { title: 'नोंदणी करा', name: 'नाव', phone: 'फोन नंबर', address: 'पत्ता', pincode: 'पिनकोड', register: 'नोंदणी करा' },
  bn: { title: 'নিবন্ধন করুন', name: 'নাম', phone: 'ফোন নম্বর', address: 'ঠিকানা', pincode: 'পিনকোড', register: 'নিবন্ধন করুন' },
  gu: { title: 'નોંધણી કરો', name: 'નામ', phone: 'ફોન નંબર', address: 'સરનામું', pincode: 'પિનકોડ', register: 'નોંધણી કરો' },
  ml: { title: 'രജിസ്റ്റർ', name: 'പേര്', phone: 'ഫോൺ നമ്പർ', address: 'വിലാസം', pincode: 'പിൻകോഡ്', register: 'രജിസ്റ്റർ' },
  pa: { title: 'ਰਜਿਸਟਰ ਕਰੋ', name: 'ਨਾਂ', phone: 'ਫੋਨ ਨੰਬਰ', address: 'ਪਤਾ', pincode: 'ਪਿੰਨ ਕੋਡ', register: 'ਰਜਿਸਟਰ ਕਰੋ' },
  or: { title: 'ପଞ୍ଜିକରଣ କରନ୍ତୁ', name: 'ନାମ', phone: 'ଫୋନ୍ ନମ୍ବର୍', address: 'ଠିକଣା', pincode: 'ପିନ୍ କୋଡ୍', register: 'ପଞ୍ଜିକରଣ କରନ୍ତୁ' },
};

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation, route }) => {
  const { selectedLanguage } = route.params;
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');

  const handleRegister = () => {
    // Handle registration logic here
    console.log('Registering with:', { name, phone, address, pincode });
    // After successful registration, navigate to the LoginScreen
    navigation.navigate('LoginScreen', { selectedLanguage });
  };

  const { title, name: nameLabel, phone: phoneLabel, address: addressLabel, pincode: pincodeLabel, register: registerLabel } = translations[selectedLanguage];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={nameLabel}
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder={phoneLabel}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder={addressLabel}
        value={address}
        onChangeText={setAddress}
      />
      <TextInput
        style={styles.input}
        placeholder={pincodeLabel}
        keyboardType="numeric"
        value={pincode}
        onChangeText={setPincode}
      />
      <Button title={registerLabel} onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
});

export default RegisterScreen;
