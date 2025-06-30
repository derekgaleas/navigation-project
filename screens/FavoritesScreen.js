import { View, Text, StyleSheet } from 'react-native';

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Favorites</Text>
      <Text style={styles.message}>No favorites added yet!</Text>
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  message: {
    fontSize: 16,
    color: '#666',
  },
});