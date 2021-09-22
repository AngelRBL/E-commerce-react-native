import React from "react";
import { ScrollView } from "react-native";
import StatusBarCustom from "../../components/StatusBarCustom";
import Search from "../../components/Search/Search";
import NewProducts from "../../components/Home/NewProducts";
import Banner from "../../components/Home/Banner";

// Banner
import colors from "../../styles/colors";

export default function Home() {
  return (
    <>
      <StatusBarCustom
        backgroundColor={colors.bgDark}
        barStyle="light-content"
      />
      <Search />
      <ScrollView>
        {/*  BANNER  */}
        <Banner />
        <NewProducts />
      </ScrollView>
    </>
  );
}
