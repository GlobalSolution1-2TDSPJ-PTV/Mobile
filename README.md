# 🌊 FloodWatch - Aplicativo Mobile de Alerta de Enchentes

  <img src="https://github.com/GlobalSolution1-2TDSPJ-PTV/Mobile/blob/main/assets/IconFlood.png?raw=true" width="120"/>

Este é um aplicativo mobile desenvolvido com **React Native** utilizando o framework **Expo**.  
O projeto foi construído com foco em fornecer soluções para **monitoramento de enchentes**, visando funcionalidades como alerta em tempo real, exibição de áreas de risco em mapas, envio de SOS e listagem de abrigos disponíveis.

## 👥 Integrantes do Projeto
- Pedro Henrique dos Santos - RM559064  
- Thiago Thomaz Sales Conceição - RM557992  
- Vinícius de Oliveira Coutinho - RM556182  

## 📱 Funcionalidades do App

- **Tela de Boas-Vindas (`/welcome`)**: ponto de entrada do aplicativo, introduz o usuário à plataforma FloodWatch.  
- **Dashboard (`/home`)**: status geral da cidade, com acesso rápido a outras funcionalidades.  
- **Alertas (`/alerts`)**: exibe áreas com risco de enchente e informações detalhadas.  
- **Mapa (`/map`)**: mostra as zonas de risco em um mapa interativo com marcadores coloridos conforme o nível de risco.  
- **Envio de SOS (`/sos`)**: permite que o usuário envie um pedido de socorro compartilhando sua localização atual.  
- **Abrigos (`/shelters`)**: lista abrigos disponíveis e informações úteis para quem precisa se deslocar para áreas seguras.  
- **Perfil (`/profile`)**: gerenciamento de configurações da conta logada.  
- **Navegação (`_layout.tsx`)**: configuração da navegação entre telas utilizando o **Expo Router**.

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev/)  
- [Expo](https://expo.dev/)  
- [TypeScript](https://www.typescriptlang.org/)  
- [React Native Maps](https://github.com/react-native-maps/react-native-maps) — para exibição de mapas.  
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/) — para obter a localização do usuário.

## 📦 Instalação

```bash
git clone https://github.com/GlobalSolution1-2TDSPJ-PTV/Mobile.git

npm install
```

### ▶️ Inicie o aplicativo:

**Opção 1:**
```bash
npx expo start
```

**Opção 2:**
```bash
npm start
```

Abra o app no seu dispositivo físico com o **Expo Go** ou emulador.

## ✅ Pré-requisitos

- Node.js instalado  
- Expo CLI instalado globalmente (`npm install -g expo-cli`)  <-- ainda não projetado, ao final do app.
- Conta Expo para testar no app Expo Go  
- Dispositivo ou emulador com acesso à localização (para funcionalidades de mapa e SOS)

## 🗺️ Funcionalidades em destaque:

- **Mapa interativo** com marcadores coloridos conforme o nível de risco.  
- **Envio de SOS** com compartilhamento de localização.  
- **Listagem de abrigos** e pontos seguros.  
- **Dashboard informativo** sobre status da cidade.
