import { View, Text, Button, StyleSheet, TextInput } from 'react-native';
import { useRouter } from 'expo-router';

export default function RegisterScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />
      <TextInput
        style={styles.input}
        placeholder="Confirmar Senha"
        secureTextEntry
      />
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar"
          color="#32CD32"
          onPress={() => router.push('/')}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Voltar"
          color="#4682B4"
          onPress={() => router.back()}
        />
      </View>
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
    marginBottom: 40,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: '#1E90FF',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  },
});
