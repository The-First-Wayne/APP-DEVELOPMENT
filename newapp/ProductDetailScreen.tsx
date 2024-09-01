// ProductDetailScreen.tsx

import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type ProductDetailScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductDetailScreen'>;

const getTranslations = (language: string) => {
  switch (language) {
    case 'hi':
      return { productDetails: 'उत्पाद विवरण', placeBid: 'बोली लगाएं' };
    case 'ta':
      return { productDetails: 'பொருள் விவரங்கள்', placeBid: 'பிட் செய்யவும்' };
    case 'te':
      return { productDetails: 'ఉత్పత్తి వివరాలు', placeBid: 'బిడ్ చేయండి' };
    case 'kn':
      return { productDetails: 'ಉತ್ಪನ್ನ ವಿವರಗಳು', placeBid: 'ಬಿಡ್ ಮಾಡಿ' };
    case 'mr':
      return { productDetails: 'उत्पादन तपशील', placeBid: 'बोली लावा' };
    case 'bn':
      return { productDetails: 'পণ্য বিবরণ', placeBid: 'বিড করুন' };
    case 'gu':
      return { productDetails: 'ઉત્પાદન વિગતો', placeBid: 'બિડ કરો' };
    case 'ml':
      return { productDetails: 'ഉൽപ്പന്ന വിശദാംശങ്ങൾ', placeBid: 'ബിഡ് ചെയ്യുക' };
    case 'pa':
      return { productDetails: 'ਉਤਪਾਦ ਵਿਸ਼ੇਸ਼', placeBid: 'ਬੋਲੀ ਲਗਾਓ' };
    case 'or':
      return { productDetails: 'ଉତ୍ପାଦ ବିବରଣୀ', placeBid: 'ବିଡ୍ କରନ୍ତୁ' };
    default:
      return { productDetails: 'Product Details', placeBid: 'Place Bid' };
  }
};

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = ({ route }) => {
  const { selectedLanguage, product } = route.params;
  const { productDetails, placeBid } = getTranslations(selectedLanguage);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{productDetails}</Text>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Button title={placeBid} onPress={() => {/* Handle place bid logic here */}} />
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
  productName: {
    fontSize: 20,
    marginBottom: 10,
  },
  productDescription: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
});

export default ProductDetailScreen;
