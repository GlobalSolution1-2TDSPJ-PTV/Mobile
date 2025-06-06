import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet, ActivityIndicator, FlatList } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import getApiUrl from '../utils/api';

interface Sos {
  id: string;
  latitude: number;
  longitude: number;
  createdAt: string;
}

export default function SosScreen() {
  const [loading, setLoading] = useState(false);
  const [sosList, setSosList] = useState<Sos[]>([]);

  useEffect(() => {
    if (axios.defaults.headers.common['Authorization']) {
      fetchSosList();
    } else {
      loadLocalSos();
    }
  }, []);

  const fetchSosList = async () => {
    try {
      const response = await axios.get<Sos[]>(`${getApiUrl()}/api/sos/usuario`);
      setSosList(response.data);
    } catch (error) {
      console.error('Erro ao buscar SOS:', error);
      Alert.alert('Erro', 'Não foi possível carregar os pedidos de SOS.');
    }
  };


  const loadLocalSos = async () => {
    try {
      const data = await AsyncStorage.getItem('localSosList');
      const parsed: Sos[] = data ? JSON.parse(data) : [];
      setSosList(parsed);
    } catch (error) {
      console.error('Erro ao carregar SOS local:', error);
    }
  };

  const deleteLocalSos = async (id: string) => {
    try {
      const data = await AsyncStorage.getItem('localSosList');
      const parsed: Sos[] = data ? JSON.parse(data) : [];
      const filtered = parsed.filter(item => item.id !== id);
      await AsyncStorage.setItem('localSosList', JSON.stringify(filtered));
      setSosList(filtered);
    } catch (error) {
      console.error('Erro ao deletar SOS local:', error);
    }
  };

   const handleSendSOS = async () => {
    setLoading(true);

    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Permissão negada', 'É necessário permitir o acesso à localização.');
      setLoading(false);
      return;
    }

    try {
      const loc = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = loc.coords;
      
      const response = await axios.post(`${getApiUrl()}/api/sos`, { latitude, longitude });
      Alert.alert('SOS enviado com sucesso!', `Latitude: ${latitude}\nLongitude: ${longitude}`);
      if (!axios.defaults.headers.common['Authorization']) {
          const newSos: Sos = {
          id: response.data.id,
          latitude,
          longitude,
          createdAt: new Date().toISOString(),
        };
        setSosList(prev => [...prev, newSos]);
        await AsyncStorage.setItem('localSosList', JSON.stringify([...sosList, newSos]));
        const localSosList = await AsyncStorage.getItem('localSosList');
        if (localSosList) {
          const parsed: Sos[] = JSON.parse(localSosList);
          setSosList(parsed);
        }
        loadLocalSos();
      } else {
        fetchSosList();
      }
    } catch (error) {
      console.error('Erro ao enviar SOS:', error);
      Alert.alert('Erro', 'Não foi possível enviar o pedido de SOS.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteSOS = async (id: string) => {
    try {
      await axios.delete(`${getApiUrl()}/api/sos/${id}`);
      Alert.alert('Removido', 'Pedido de SOS deletado.');
      setSosList(prev => prev.filter(s => s.id !== id));
      await deleteLocalSos(id);
    } catch (error) {
      console.error('Erro ao deletar SOS:', error);
      Alert.alert('Erro', 'Não foi possível remover o SOS.');
    } 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gerenciar SOS</Text>

      <View style={styles.buttonContainer}>
        <Button
          title={loading ? 'Enviando...' : 'Enviar novo SOS'}
          color="#FF4500"
          onPress={handleSendSOS}
          disabled={loading}
        />
      </View>

      {loading && <ActivityIndicator size="large" color="#FF4500" />}

      <FlatList
        data={sosList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.sosItem}>
            <Text style={styles.locationText}>
              🆘 {item.latitude}, {item.longitude}
            </Text>
            <Text style={styles.dateText}>
              Criado em: {new Date(item.createdAt).toLocaleString()}
            </Text>
            <Button title="Deletar" color="#B22222" onPress={() => handleDeleteSOS(item.id)} />
          </View>
        )}
        ListEmptyComponent={<Text>Nenhum SOS enviado ainda.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#F0F8FF',
  },
  title: {
    fontSize: 24,
    color: '#1E90FF',
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
  sosItem: {
    backgroundColor: '#E0FFFF',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
  },
  locationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
});
