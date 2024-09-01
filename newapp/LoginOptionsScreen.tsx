// LoginOptionsScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type LoginOptionsScreenProps = NativeStackScreenProps<RootStackParamList, 'LoginOptionsScreen'>;

const getTranslations = (language: string) => {
  switch (language) {
    case 'hi':
      return { title: 'उपयोगकर्ता प्रकार चुनें', buyer: 'खरीदार', seller: 'विक्रेता' };
    case 'ta':
      return { title: 'பயனர் வகையை தேர்வு செய்யவும்', buyer: 'வாங்குநர்', seller: 'விற்பனையாளர்' };
    case 'te':
      return { title: 'వినియోగదారుడి రకం ఎంపిక చేయండి', buyer: 'కొనుగోలుదారు', seller: 'విక్రేత' };
    case 'kn':
      return { title: 'ಬಳಕೆದಾರರ ಪ್ರಕಾರ ಆಯ್ಕೆಮಾಡಿ', buyer: 'ಖರೀದುದಾರ', seller: 'ಮಾರಾಟಗಾರ' };
    case 'mr':
      return { title: 'वापरकर्ता प्रकार निवडा', buyer: 'खरेदीदार', seller: 'विक्रेता' };
    case 'bn':
      return { title: 'ব্যবহারকারী টাইপ নির্বাচন করুন', buyer: 'ক্রেতা', seller: 'বিক্রেতা' };
    case 'gu':
      return { title: 'વપરાશકર્તા પ્રકાર પસંદ કરો', buyer: 'ખરીદદાર', seller: 'વિક્રેતા' };
    case 'ml':
      return { title: 'ഉപയോക്തൃ തരം തിരഞ്ഞെടുക്കുക', buyer: 'വാങ്ങുന്നവർ', seller: 'വിൽപ്പനക്കാരൻ' };
    case 'pa':
      return { title: 'ਉਪਭੋਗਤਾ ਪ੍ਰਕਾਰ ਚੁਣੋ', buyer: 'ਖਰੀਦਦਾਰ', seller: 'ਵਿਕਰੇਤਾ' };
    case 'or':
      return { title: 'ବ୍ୟବହାରକାରୀ ପ୍ରକାର ବାଛନ୍ତୁ', buyer: 'କ୍ରେତା', seller: 'ବିକ୍ରେତା' };
    default:
      return { title: 'Select User Type', buyer: 'Buyer', seller: 'Seller' };
  }
};

const LoginOptionsScreen: React.FC<LoginOptionsScreenProps> = ({ navigation, route }) => {
  const { selectedLanguage } = route.params;
  const { title, buyer, seller } = getTranslations(selectedLanguage);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={buyer}
          onPress={() => navigation.navigate('ProductListingScreen', { selectedLanguage, userType: 'buyer' })}
        />
      </View>
      <View style={styles.buttonSpacing} />
      <View style={styles.buttonContainer}>
        <Button
          title={seller}
          onPress={() => navigation.navigate('HomeScreen', { selectedLanguage, userType: 'seller' })}
        />
      </View>
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
  buttonSpacing: {
    height: 10, // Adjust spacing as needed
  },
});

export default LoginOptionsScreen;
