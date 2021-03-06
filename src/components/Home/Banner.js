import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import Coursel, { Pagination } from "react-native-snap-carousel";
import { size } from "lodash";
import { useNavigation } from "@react-navigation/native";
import { getBannersApi } from "../../api/home-banner";
import { API_URL } from "../../utils/constants";

const width = Dimensions.get("window").width;
const height = 160;

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [bannerActive, setBannerActive] = useState(0);

  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const response = await getBannersApi();
      setBanners(response);
    })();
  }, []);

  if (!banners) return null;

  const renderItem = ({ item }) => {
    console.log(item.product._id);
    return (
      <TouchableWithoutFeedback onPress={() => goToProduct(item.product._id)}>
        <Image
          style={styles.carousel}
          source={{ uri: `${API_URL}${item.banner.url}` }}
        />
      </TouchableWithoutFeedback>
    );
  };

  const goToProduct = (id) => {
    navigation.push("product", { idProduct: id });
  };

  return (
    <View style={styles.container}>
      <Coursel
        layout={"default"}
        data={banners}
        sliderWidth={width}
        itemWidth={width}
        renderItem={renderItem}
        onSnapToItem={(index) => setBannerActive(index)}
      />
      <Pagination
        dotsLength={size(banners)}
        activeDotIndex={bannerActive}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        containerStyle={styles.dotsContainer}
        dotColor="#f2f2f2"
        inactiveDotColor="#f2f2f2"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  carousel: {
    width,
    height,
  },
  dotsContainer: {
    position: "absolute",
    bottom: -20,
    width: "100%",
  },
});
