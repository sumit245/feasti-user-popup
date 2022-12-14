import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView } from "react-native";
import { TabView, TabBar } from "react-native-tab-view";
import WebView from "react-native-webview";
import AboutUs from "./Components/about/AboutUs";
import Terms from "./Components/about/Terms";

const PDFReader = ({ url: uri }) => <WebView source={{ uri }} />;

export default function About() {
  const [index, setIndex] = useState(0);

  const [routes] = useState([
    {
      key: "tnc",
      title: "Terms & Conditions",
    },
    {
      key: "privacy",
      title: "Privacy",
    },
  ]);
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      style={{
        marginBottom: 8,
        backgroundColor: "transparent",
      }}
      activeColor="#ff6600"
      labelStyle={{ fontWeight: "bold" }}
      inactiveColor="#272727"
      indicatorStyle={{ backgroundColor: "#ff9900", marginHorizontal: 12 }}
    />
  );
  const renderScene = ({ route }) => {
    switch (route.key) {
      case "tnc":
        return <Terms />
      case "privacy":
        return (
          <AboutUs />
        );
      default:
        break;
    }
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TabView
        lazy
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
