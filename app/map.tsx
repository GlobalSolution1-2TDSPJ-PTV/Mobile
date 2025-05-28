import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const floodAlerts = [
  {
    id: '1',
    area: 'Centro',
    riskLevel: 'Alto',
    status: 'Alagamento severo em vias principais.',
    latitude: -23.55052,
    longitude: -46.633308,
  },
  {
    id: '2',
    area: 'Bairro Industrial',
    riskLevel: 'Médio',
    status: 'Risco de transbordamento próximo ao rio.',
    latitude: -23.55252,
    longitude: -46.637308,
  },
  {
    id: '3',
    area: 'Vila Nova',
    riskLevel: 'Baixo',
    status: 'Monitoramento preventivo.',
    latitude: -23.55652,
    longitude: -46.630308,
  },
];

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mapa de Áreas de Risco</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.55052,
          longitude: -46.633308,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        {floodAlerts.map((alert) => (
          <Marker
            key={alert.id}
            coordinate={{
              latitude: alert.latitude,
              longitude: alert.longitude,
            }}
            pinColor={
              alert.riskLevel === 'Alto'
                ? 'red'
                : alert.riskLevel === 'Médio'
                ? 'orange'
                : 'green'
            }
          >
            <Callout>
              <View style={{ width: 200 }}>
                <Text style={{ fontWeight: 'bold' }}>{alert.area}</Text>
                <Text>Risco: {alert.riskLevel}</Text>
                <Text>{alert.status}</Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginVertical: 10,
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height - 60,
  },
});
