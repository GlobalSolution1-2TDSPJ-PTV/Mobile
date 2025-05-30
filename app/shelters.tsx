import { View, Text, StyleSheet } from 'react-native';

export default function SheltersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrigos Disponíveis</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', 
  },
  title: {
    fontSize: 24,
    color: '#1E90FF', 
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
