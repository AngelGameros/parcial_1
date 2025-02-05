import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import MyForm from './components/MyForm';

export default function App() {

  return (
    <View style={styles.container}>
      <MyForm/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
