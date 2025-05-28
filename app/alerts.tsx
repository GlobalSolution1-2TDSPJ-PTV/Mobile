import { View, Text, StyleSheet } from 'react-native';

export default function AlertsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alertas de Enchente</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', 
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#1E90FF', 
    fontWeight: 'bold',
  },
});
