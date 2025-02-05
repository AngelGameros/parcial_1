import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Image } from "react-native";
import { Button, TextInput, Appbar } from "react-native-paper";

export default function App() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submittedId, setSubmittedId] = useState("");
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [submittedPhone, setSubmittedPhone] = useState("");

  const btnSubmit = () => {
    setSubmittedId(id);
    setSubmittedName(name);
    setSubmittedEmail(email);
    setSubmittedPhone(phone);
    setId("");
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <View style={styles.container}>
      <Image style={styles.imagelogo} source={require('./assets/gamepass.png')} />

      <TextInput style={styles.input} label="Id" value={id} onChangeText={setId} />
      <TextInput style={styles.input} label="Name" value={name} onChangeText={setName} />
      <TextInput style={styles.input} label="Email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} label="Phone" value={phone} onChangeText={setPhone} />

      <Button mode="contained" onPress={btnSubmit}>
        Sign Up
      </Button>

      <Text style={styles.output}>Id: {submittedId}</Text>
      <Text style={styles.output}>Name: {submittedName}</Text>
      <Text style={styles.output}>Email: {submittedEmail}</Text>
      <Text style={styles.output}>Phone: {submittedPhone}</Text>
      <Image style={styles.image} source={require('./assets/players.png')} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  input: {
    marginBottom: 20,
  },
  output: {
    marginTop: 10,
    fontSize: 16,
  },
  image: {
    marginTop: 30,
    width: 400,
    height: 150,
    borderRadius: 30,
    resizeMode: "contain",
  },
  imagelogo: {
    width: 300,
    height: 100,
    resizeMode: "contain",
  },
});
