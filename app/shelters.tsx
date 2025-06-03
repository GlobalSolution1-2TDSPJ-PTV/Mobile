import { View, Text, StyleSheet, FlatList } from 'react-native';

const shelters = [
  { id: '1', name: 'Abrigo Comunitário São José', address: 'Rua das Flores, 123 - Centro' },
  { id: '2', name: 'Escola Municipal Paz e Vida', address: 'Av. Brasil, 456 - Jardim América' },
  { id: '3', name: 'Igreja Batista Esperança', address: 'Rua Esperança, 789 - Vila Nova' },
  { id: '4', name: 'Ginásio Poliesportivo', address: 'Praça Central, 101 - Bela Vista' },
];

export default function SheltersScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Abrigos Disponíveis</Text>
      <FlatList
        data={shelters}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.shelterItem}>
            <Text style={styles.shelterName}>{item.name}</Text>
            <Text style={styles.shelterAddress}>{item.address}</Text>
          </View>
        )}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 24,
    color: '#1E90FF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  list: {
    marginTop: 10,
  },
  shelterItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  shelterName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
  },
  shelterAddress: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
  },
});
