import { View, Text, SafeAreaView, StatusBar, Platform } from "react-native";
import React from "react";
import ChatHeader from "../components/ChatHeader";
import SearchBar from "../components/SearchBar";
import OnlineUser from "../components/OnlineUser";

const Chats = () => {
	return (
		<SafeAreaView
			style={{
				paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
				flex: 1,
				backgroundColor: "white",
			}}
		>
			<ChatHeader />
			<SearchBar />
			<OnlineUser />
		</SafeAreaView>
	);
};

export default Chats;
