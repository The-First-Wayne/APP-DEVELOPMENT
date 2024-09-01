// ProductListingScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
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

const ProductListingScreen: React.FC<ProductListingScreenProps> = ({ route, navigation }) => {
  const { selectedLanguage } = route.params;
  const { searchPlaceholder, advertisement, title, farmerReviews } = getTranslations(selectedLanguage);

  const [searchQuery, setSearchQuery] = useState('');

  const products = [
    { id: '1', name: 'Product 1', isAd: true, description: 'Description of Product 1' },
    { id: '2', name: 'Product 2', isAd: true, description: 'Description of Product 2' },
    { id: '3', name: 'Product 3', isAd: true, description: 'Description of Product 3' },
    { id: '4', name: 'Product 4', isAd: true, description: 'Description of Product 4' },
  ];

  const farmerReviewsData = [
    { id: '1', name: 'Farmer A', review: 'Great product!' },
    { id: '2', name: 'Farmer B', review: 'Very helpful.' },
    { id: '3', name: 'Farmer C', review: 'Could be better.' },
    { id: '4', name: 'Farmer D', review: 'Loved it!' },
  ];

  const handleSearch = () => {
    const foundProduct = products.find(product => product.name.toLowerCase().includes(searchQuery.toLowerCase()));
    if (foundProduct) {
      navigation.navigate('ProductDetailScreen', { selectedLanguage, product: foundProduct });
    }
  };

  const handleAdClick = (product: { id: string; name: string; description: string }) => {
    navigation.navigate('ProductDetailScreen', { selectedLanguage, product });
  };

  const renderProduct = ({ item }: { item: { id: string; name: string; isAd: boolean; description: string } }) => (
    <TouchableOpacity
      style={styles.productContainer}
      onPress={() => item.isAd && handleAdClick(item)}
    >
      <Text style={styles.productText}>
        {item.isAd ? `${advertisement}: ${item.name}` : item.name}
      </Text>
    </TouchableOpacity>
  );

  const renderFarmerReview = ({ item }: { item: { id: string; name: string; review: string } }) => (
    <View style={styles.reviewContainer}>
      <Text style={styles.reviewName}>{item.name}</Text>
      <Text style={styles.reviewText}>{item.review}</Text>
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
        onSubmitEditing={handleSearch}
      />
      <FlatList
        data={products.filter(product => product.isAd)}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        style={styles.advertisementList}
      />
      <Text style={styles.farmerReviewsTitle}>{farmerReviews}</Text>
      <FlatList
        data={farmerReviewsData}
        renderItem={renderFarmerReview}
        keyExtractor={item => item.id}
        horizontal
        style={styles.farmerReviewsList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  advertisementList: {
    marginBottom: 20,
  },
  productContainer: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  productText: {
    fontSize: 18,
  },
  farmerReviewsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  farmerReviewsList: {
    paddingVertical: 10,
  },
  reviewContainer: {
    width: 150,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewName: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewText: {
    fontSize: 14,
    color: '#333',
  },
});

export default ProductListingScreen;
