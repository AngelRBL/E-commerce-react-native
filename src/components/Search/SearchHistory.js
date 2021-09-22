import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";

import colors from "../../styles/colors";

export default function SearchHistory(props) {
  const { showHistory, containerHeight } = props;
  return (
    <View
      style={[
        showHistory ? styles.history : styles.hidden,
        { top: containerHeight },
      ]}
    >
      <Text>Historial de busqueda</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  hidden: {
    display: "none",
  },
  history: {
    position: "absolute",
    // backgroundColor: colors.bgLight,
    backgroundColor: colors.bgDark,

    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
