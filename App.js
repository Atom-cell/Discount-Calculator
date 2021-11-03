import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Discount App</Text>
      <TextInput
        style={styles.input}
        placeholder="ENTER PRICE"
        value={price}
        onChangeText={(price) => setPrice(price)}
      />
      <TextInput
        style={styles.input}
        placeholder="ENTER DISCOUNT %"
        value={discount}
        onChangeText={(discount) => setDiscount(discount)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  input: {
    padding: 20,
    backgroundColor: "#cfcfcf",
    marginVertical: 20,
    width: "100%",
    borderRadius: 50,
    fontSize: 20,
  },
});
