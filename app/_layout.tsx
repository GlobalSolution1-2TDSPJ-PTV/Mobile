import { Drawer } from 'expo-router/drawer';
import { StatusBar, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Drawer
        screenOptions={{
          drawerActiveTintColor: '#2196F3',
          drawerInactiveTintColor: '#555',
          drawerLabelStyle: { fontSize: 16 },
          headerStyle: { backgroundColor: '#2196F3' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
          drawerStyle: { backgroundColor: '#f0f0f0' },
        }}
      >
        <Drawer.Screen
          name="welcome"
          options={{
            drawerLabel: '👋 Boas-vindas',
            title: 'Boas-vindas a FloodWatch',
          }}
        />
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: '🏠 Dashboard',
            title: 'Dashboard',
          }}
        />
        <Drawer.Screen
          name="sos"
          options={{
            drawerLabel: '🆘 SOS',
            title: 'Envio de SOS',
          }}
        />
        <Drawer.Screen
          name="alerts"
          options={{
            drawerLabel: '🚨 Alertas',
            title: 'Alertas de Enchente',
          }}
        />
        <Drawer.Screen
          name="map"
          options={{
            drawerLabel: '🗺️ Mapa',
            title: 'Zonas de Risco',
          }}
        />
        <Drawer.Screen
          name="shelters"
          options={{
            drawerLabel: '🏕️ Abrigos',
            title: 'Abrigos Disponíveis',
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{
            drawerLabel: '⚙️ Perfil',
            title: 'Configurações',
          }}
        />
      </Drawer>
    </>
  );
}

const styles = StyleSheet.create({
  drawerHeader: {
    height: 120,
    backgroundColor: '#2196F3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
