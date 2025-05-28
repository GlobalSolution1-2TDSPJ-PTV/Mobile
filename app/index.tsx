import { View, Text } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#121212' }}>
      <Text style={{ color: '#fff' }}>Bem-vindo ao FloodWatch</Text>
    </View>
  );
}
