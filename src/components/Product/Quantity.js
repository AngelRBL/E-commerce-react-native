import React, { useState } from "react";
import { LogBox, StyleSheet, View } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

export default function Quantity(props) {
  LogBox.ignoreLogs([
    "VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.",
  ]);

  const { quantity, setQuantity } = props;
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
  ]);
  return (
    <View style={{ zIndex: 2 }}>
      <DropDownPicker
        defaultValue={quantity}
        open={open}
        setOpen={setOpen}
        items={items}
        setItems={setItems}
        value={value}
        setValue={setValue}
        containerStyle={styles.containerStyle}
        itemStyle={styles.itemStyle}
        dropDownStyle={styles.DropDownPicker}
        style={styles.DropDownPicker}
        labelStyle={styles.labelStyle}
        onChangeValue={(value) => setQuantity(value)}
        placeholder="Cantidad"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    height: 40,
    width: 116,
  },
  itemStyle: {
    justifyContent: "flex-start",
  },
  DropDownPicker: {
    backgroundColor: "#fafafa",
  },
  labelStyle: {
    color: "#000",
  },
});
