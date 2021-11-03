import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Pressable,
} from "react-native";

export default function App() {
  const [price, setPrice] = React.useState(0);
  const [discount, setDiscount] = React.useState(0);
  const [save, setSave] = React.useState(0);
  const [fp, setFp] = React.useState(0);

  React.useEffect(() => {}, calculate);

  const calculate = () => {
    let disc = discount / 100;
    let final_price = price - price * disc;
    setFp(final_price);
    setSave((price * discount) / 100);
  };
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30 }}>Discount Calculator</Text>
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
      <Text style={styles.txt}>You Saved: {save}</Text>
      <Text style={styles.txt}>Final Price: {fp}</Text>
      <Pressable
        title="Calculate"
        style={styles.btn}
        onPress={() => calculate()}
      >
        <Text style={{ fontSize: 15 }}>CALCULATE</Text>
      </Pressable>
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
  txt: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  btn: {
    marginTop: 20,
    backgroundColor: "#00a8ff",
    padding: 20,
    borderRadius: 50,
  },
});
