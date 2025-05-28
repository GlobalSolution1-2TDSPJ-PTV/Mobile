import { View, Text, StyleSheet, FlatList } from 'react-native';

const floodAlerts = [
  {
    id: '1',
    area: 'Centro',
    riskLevel: 'Alto',
    status: 'Alagamento severo em vias principais.',
    updatedAt: '2025-05-28 14:00',
  },
  {
    id: '2',
    area: 'Bairro Industrial',
    riskLevel: 'Médio',
    status: 'Risco de transbordamento próximo ao rio.',
    updatedAt: '2025-05-28 13:30',
  },
  {
    id: '3',
    area: 'Vila Nova',
    riskLevel: 'Baixo',
    status: 'Monitoramento preventivo.',
    updatedAt: '2025-05-28 13:00',
  },
];

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas de Enchente</Text>

      <FlatList
        data={floodAlerts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.area}>{item.area}</Text>
            <Text style={styles.risk}>Risco: {item.riskLevel}</Text>
            <Text>{item.status}</Text>
            <Text style={styles.updated}>Atualizado: {item.updatedAt}</Text>
          </View>
        )}
        contentContainerStyle={{ paddingVertical: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  area: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
  },
  risk: {
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
  updated: {
    marginTop: 5,
    fontSize: 12,
    color: '#555',
  },
});
