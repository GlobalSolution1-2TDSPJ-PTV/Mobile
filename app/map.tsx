import { View, Text, StyleSheet } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa Interativo - Zonas de Risco</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // azul bem claro
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#1E90FF', // azul forte
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
