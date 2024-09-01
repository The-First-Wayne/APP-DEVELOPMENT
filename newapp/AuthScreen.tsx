// AuthScreen.tsx

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'AuthScreen'>;

const translations: { [key: string]: { title: string; login: string; register: string } } = {
  en: { title: 'Choose an Option', login: 'Login', register: 'Register' },
  hi: { title: 'एक विकल्प चुनें', login: 'लॉग इन करें', register: 'पंजीकरण करें' },
  ta: { title: 'ஒரு விருப்பத்தை தேர்வுசெய்யவும்', login: 'உள்நுழைவு', register: 'பதிவு செய்க' },
  te: { title: 'ఒక ఆప్షన్ ఎంచుకోండి', login: 'లాగిన్', register: 'నమోదు' },
  kn: { title: 'ಒಂದು ಆಯ್ಕೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ', login: 'ಲಾಗಿನ್', register: 'ನೋಂದಣಿ' },
  mr: { title: 'एक पर्याय निवडा', login: 'लॉगिन करा', register: 'नोंदणी करा' },
  bn: { title: 'একটি বিকল্প নির্বাচন করুন', login: 'লগইন', register: 'নিবন্ধন করুন' },
  gu: { title: 'એક વિકલ્પ પસંદ કરો', login: 'લૉગિન', register: 'નોંધણી કરો' },
  ml: { title: 'ഒരു ഓപ്ഷൻ തിരഞ്ഞെടുക്കുക', login: 'ലോഗിൻ', register: 'രജിസ്റ്റർ' },
  pa: { title: 'ਇੱਕ ਵਿਕਲਪ ਚੁਣੋ', login: 'ਲਾਗਿਨ', register: 'ਰਜਿਸਟਰ ਕਰੋ' },
  or: { title: 'ଏକ ବିକଳ୍ପ ବାଛନ୍ତୁ', login: 'ଲଗଇନ୍ କରନ୍ତୁ', register: 'ପଞ୍ଜିକରଣ କରନ୍ତୁ' },
};

const AuthScreen: React.FC<AuthScreenProps> = ({ route, navigation }) => {
  const { selectedLanguage } = route.params;
  const { title, login, register } = translations[selectedLanguage] || translations.en;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={login}
          onPress={() => navigation.navigate('LoginScreen', { selectedLanguage })}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={register}
          onPress={() => navigation.navigate('RegisterScreen', { selectedLanguage })}
        />
      </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    marginBottom: 15,
  },
});

export default AuthScreen;
