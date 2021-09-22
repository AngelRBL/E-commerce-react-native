import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, IconButton } from "react-native-paper";

export default function Favorite(props) {
  const { product } = props;

  const addFavorite = () => {
    console.log("Añadido a lista de favoritos");
    console.log(product.title);
  };

  return (
    <View style={{ zIndex: 1 }}>
      <Button
        icon="heart"
        contentStyle={styles.btnAddFavContent}
        labelStyle={styles.btnLabel}
        style={styles.btn}
        color="red"
        onPress={addFavorite}
      >
        Añadir a favoritos
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  btnAddFavContent: {
    backgroundColor: "white",
    paddingVertical: 5,
  },
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
});
