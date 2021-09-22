import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button } from "react-native-paper";

export default function Buy(props) {
  const { product, quantity } = props;

  const addProductCart = () => {
    console.log("PRODUCTO AÑADIDO AL CARRITO");
    console.log(product.title);
    console.log("Cantidad", quantity);
  };

  return (
    <View style={{zIndex: 1}}>
      <Button
        mode="contained"
        contentStyle={styles.btnBuyContent}
        labelStyle={styles.btnLabel}
        style={styles.btn}
        onPress={addProductCart}
      >
        Añadir al carrito
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnBuyContent: {
    backgroundColor: "#008fe9",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
});
