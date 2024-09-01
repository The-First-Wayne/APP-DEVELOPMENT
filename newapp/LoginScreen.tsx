// LoginScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const translations = {
  en: { title: 'Login', phone: 'Phone Number', passcode: 'Passcode', login: 'Login' },
  hi: { title: 'लॉग इन करें', phone: 'फोन नंबर', passcode: 'पासकोड', login: 'लॉग इन करें' },
  ta: { title: 'உள்நுழைவு', phone: 'தொலைபேசி எண்', passcode: 'கடவுச்சொல்', login: 'உள்நுழைவு' },
  te: { title: 'లాగిన్', phone: 'ఫోన్ నంబర్', passcode: 'పాస్‌కోడ్', login: 'లాగిన్' },
  kn: { title: 'ಲಾಗಿನ್', phone: 'ದೂರವಾಣಿ ಸಂಖ್ಯೆ', passcode: 'ಪಾಸ್‌ಕೋಡ್', login: 'ಲಾಗಿನ್' },
  mr: { title: 'लॉगिन करा', phone: 'फोन नंबर', passcode: 'पासकोड', login: 'लॉगिन करा' },
  bn: { title: 'লগইন', phone: 'ফোন নম্বর', passcode: 'পাসকোড', login: 'লগইন' },
  gu: { title: 'લૉગિન', phone: 'ફોન નંબર', passcode: 'પાસકોડ', login: 'લૉગિન' },
  ml: { title: 'ലോഗിൻ', phone: 'ഫോൺ നമ്പർ', passcode: 'പാസ്കോഡ്', login: 'ലോഗിൻ' },
  pa: { title: 'ਲਾਗਿਨ', phone: 'ਫੋਨ ਨੰਬਰ', passcode: 'ਪਾਸਕੋਡ', login: 'ਲਾਗਿਨ' },
  or: { title: 'ଲଗଇନ୍ କରନ୍ତୁ', phone: 'ଫୋନ୍ ନମ୍ବର୍', passcode: 'ପାସ୍‌କୋଡ୍', login: 'ଲଗଇନ୍ କରନ୍ତୁ' },
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation, route }) => {
  const { selectedLanguage } = route.params;
  const [phone, setPhone] = useState('');
  const [passcode, setPasscode] = useState('');

  const handleLogin = () => {
    // Handle login logic here
    console.log('Logging in with:', { phone, passcode });
    // Navigate to the LoginOptionsScreen after successful login
    navigation.navigate('LoginOptionsScreen', { selectedLanguage });
  };

  const { title, phone: phoneLabel, passcode: passcodeLabel, login: loginLabel } = translations[selectedLanguage];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.input}
        placeholder={phoneLabel}
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />
      <TextInput
        style={styles.input}
        placeholder={passcodeLabel}
        secureTextEntry
        value={passcode}
        onChangeText={setPasscode}
      />
      <Button title={loginLabel} onPress={handleLogin} />
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

export default LoginScreen;
