import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const third_image = "https://cdn1.sixmorevodka.com/wp-content/uploads/2019/10/08000621/MIGHTY-PORO.jpg";

export default function App() {

  return (
    <View style={styles.container}>
      <Text style={styles.tittle}> Source: Local Image!</Text>
      <Text style={styles.tittle}> Source: Third Image!</Text>
      <Image style={styles.image} source={{uri: third_image}} />
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
  tittle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
});
