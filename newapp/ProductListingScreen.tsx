// ProductListingScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './App';

type ProductListingScreenProps = NativeStackScreenProps<RootStackParamList, 'ProductListingScreen'>;

const getTranslations = (language: string) => {
  switch (language) {
    case 'hi':
      return { searchPlaceholder: 'उत्पाद खोजें', advertisement: 'विज्ञापन', title: 'उत्पाद सूची', farmerReviews: 'किसान समीक्षा' };
    case 'ta':
      return { searchPlaceholder: 'பொருட்களை தேடுங்கள்', advertisement: 'விளம்பரம்', title: 'பொருள் பட்டியல்', farmerReviews: 'விவசாயி மதிப்புரைகள்' };
    case 'te':
      return { searchPlaceholder: 'ఉత్పత్తులను వెతకండి', advertisement: 'విజ్ఞప్తి', title: 'ఉత్పత్తుల జాబితా', farmerReviews: 'రైతుల సమీక్షలు' };
    case 'kn':
      return { searchPlaceholder: 'ಉತ್ಪನ್ನಗಳನ್ನು ಹುಡುಕಿ', advertisement: 'ವಿಜ್ಞಾಪನೆ', title: 'ಉತ್ಪನ್ನ ಪಟ್ಟಿ', farmerReviews: 'ಕೃಷಿಕರ ವಿಮರ್ಶೆಗಳು' };
    case 'mr':
      return { searchPlaceholder: 'उत्पादने शोधा', advertisement: 'जाहिरात', title: 'उत्पादन सूची', farmerReviews: 'शेतकरी पुनरावलोकने' };
    case 'bn':
      return { searchPlaceholder: 'পণ্য অনুসন্ধান করুন', advertisement: 'বিজ্ঞাপন', title: 'পণ্য তালিকা', farmerReviews: 'কৃষক পর্যালোচনা' };
    case 'gu':
      return { searchPlaceholder: 'ઉત્પાદનો શોધો', advertisement: 'જાહેરાત', title: 'ઉત્પાદન સૂચિ', farmerReviews: 'ખેડૂત સમીક્ષાઓ' };
    case 'ml':
      return { searchPlaceholder: 'ഉൽപ്പന്നങ്ങൾ തിരയുക', advertisement: 'വിജ്ഞാപനം', title: 'ഉൽപ്പന്ന പട്ടിക', farmerReviews: 'കർഷക നിരൂപണങ്ങൾ' };
    case 'pa':
      return { searchPlaceholder: 'ਉਤਪਾਦ ਲੱਭੋ', advertisement: 'ਵਿਗਿਆਪਨ', title: 'ਉਤਪਾਦ ਸੂਚੀ', farmerReviews: 'ਕਿਸਾਨ ਸਮੀਖਿਆਵਾਂ' };
    case 'or':
      return { searchPlaceholder: 'ଉତ୍ପାଦ ଖୋଜନ୍ତୁ', advertisement: 'ବିଜ୍ଞାପନ', title: 'ଉତ୍ପାଦ ସୂଚୀ', farmerReviews: 'କୃଷକ ସମୀକ୍ଷା' };
    default:
      return { searchPlaceholder: 'Search Products', advertisement: 'Advertisement', title: 'Product List', farmerReviews: 'Farmer Reviews' };
  }
};

const ProductListingScreen: React.FC<ProductListingScreenProps> = ({ route }) => {
  const { selectedLanguage } = route.params;
  const { searchPlaceholder, advertisement, title, farmerReviews } = getTranslations(selectedLanguage);

  const [searchQuery, setSearchQuery] = useState('');

  // Sample data to demonstrate advertisements and farmer reviews
  const products = [
    { id: '1', name: 'Product 1', isAd: true },
    { id: '2', name: 'Product 2', isAd: true },
    { id: '3', name: 'Product 3', isAd: true },
    { id: '4', name: 'Product 4', isAd: true },
  ];

  const farmerReviewsData = [
    { id: '1', name: 'Farmer A', review: 'Great product!' },
    { id: '2', name: 'Farmer B', review: 'Very helpful.' },
    { id: '3', name: 'Farmer C', review: 'Could be better.' },
    { id: '4', name: 'Farmer D', review: 'Loved it!' },
  ];

  const renderProduct = ({ item }: { item: { id: string; name: string; isAd: boolean } }) => (
    <View style={styles.productContainer}>
      <Text style={styles.productText}>
        {item.isAd ? `${advertisement}: ${item.name}` : item.name}
      </Text>
    </View>
  );

  const renderFarmerReview = ({ item }: { item: { id: string; name: string; review: string } }) => (
    <View style={styles.farmerReviewContainer}>
      <Text style={styles.farmerName}>{item.name}</Text>
      <Text style={styles.farmerReview}>{item.review}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput
        style={styles.searchBar}
        placeholder={searchPlaceholder}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.list}
      />
      <Text style={styles.sectionTitle}>{farmerReviews}</Text>
      <FlatList
        data={farmerReviewsData}
        renderItem={renderFarmerReview}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20,
  },
  productContainer: {
    padding: 15,
    backgroundColor: '#fff',
    marginBottom: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  productText: {
    fontSize: 18,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
  },
  horizontalList: {
    paddingBottom: 20,
  },
  farmerReviewContainer: {
    width: 150,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    marginRight: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  farmerName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  farmerReview: {
    fontSize: 14,
    color: '#555',
    marginTop: 5,
  },
});

export default ProductListingScreen;
