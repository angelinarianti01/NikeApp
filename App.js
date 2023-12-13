import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductsScreen from './src/screens/ProductsScreen';
import ProductDetailsScreen from './src/screens/ProductDetailsScreen';
import ShoppingCartScreen from './src/screens/ShoppingCartScreen';

import Navigation from './src/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Navigation />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
