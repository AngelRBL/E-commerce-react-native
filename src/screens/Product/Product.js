import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import StatusBarCustom from "../../components/StatusBarCustom";
import Search from "../../components/Search/Search";
import ScreenLoading from "../../components/ScreenLoading";
import { getProductApi } from "../../api/product";
import CarouselImage from "../../components/Product/CarouselImage";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";
import Favorite from "../../components/Product/Favorite";

import colors from "../../styles/colors";

export default function Product(props) {
  const { route } = props;
  const { params } = route;
  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    (async () => {
      const response = await getProductApi(params.idPruduct);
      setProduct(response);
      const arrayImage = [response.main_image];
      arrayImage.push(...response.images);
      setImages(arrayImage);
    })();
  }, [params]);

  return (
    <>
      <StatusBarCustom
        backgroundColor={colors.bgDark}
        barstyle="light-content"
      />
      <Search />
      {!product ? (
        <ScreenLoading text="Cargado producto" size="large" />
      ) : (
        <ScrollView style={styles.container}>
          <Text style={styles.title}>{product.title}</Text>
          <CarouselImage images={images} />
          <View style={styles.containerView}>
            <Price price={product.price} discount={product.discount} />
            <Quantity quantity={quantity} setQuantity={setQuantity} />
            <Buy product={product} quantity={quantity} />
            <Favorite product={product} />
          </View>
        </ScrollView>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 50,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
    padding: 10,
    textAlign: "center",
  },
  containerView: {
    padding: 10,
  },
});
