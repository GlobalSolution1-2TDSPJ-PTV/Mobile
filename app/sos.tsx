import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet, ActivityIndicator } from 'react-native';
import * as Location from 'expo-location';

export default function SosScreen() {
  const [loading, setLoading] = useState(false);
  const [location, setLocation] = useState<Location.LocationObject | null>(null);  

  const handleSendSOS = async () => {
    setLoading(true);

    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir o acesso à localização.');
      setLoading(false);
      return;
    }

    let loc = await Location.getCurrentPositionAsync({});
    setLocation(loc); 

    setLoading(false);

    Alert.alert(
      'SOS enviado',
      `Localização: \nLatitude: ${loc.coords.latitude}\nLongitude: ${loc.coords.longitude}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Envio de SOS</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Enviando...' : 'Enviar SOS'}
          color="#FF4500"
          onPress={handleSendSOS}
          disabled={loading}
        />
      </View>

      {location && (
        <View style={styles.locationContainer}>
          <Text style={styles.locationText}>
            Última localização:
          </Text>
          <Text style={styles.locationText}>
            Latitude: {location.coords.latitude}
          </Text>
          <Text style={styles.locationText}>
            Longitude: {location.coords.longitude}
          </Text>
        </View>
      )}

      {loading && <ActivityIndicator size="large" color="#FF4500" />}
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
    marginBottom: 30,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '80%',
    marginVertical: 10,
  },
  locationContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  locationText: {
    fontSize: 16,
    color: '#333',
  },
});
