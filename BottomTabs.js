import { View, Text } from "react-native";
import React from "react";
import { Ionicons, MaterialIcons } from "react-native-vector-icons";
import tw from "twrnc";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Chats from "./src/pages/Chats";
import People from "./src/pages/People";
import Stories from "./src/pages/Stories";

const BottomTabs = () => {
	const MyTabs = createBottomTabNavigator();
	return (
		<MyTabs.Navigator
			screenOptions={{
				headerShown: false,
				tabBarShowLabel: false,
				tabBarStyle: { height: 80 },
			}}
		>
			<MyTabs.Screen
				name="Chats"
				component={Chats}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={tw`items-center`}>
							<Ionicons name="chatbubble" size={20} style={tw.style(focused ? "text-blue-500" : "text-gray-500")} />
							<Text style={tw.style(focused ? "text-blue-500" : "text-gray-500")}>Chats</Text>
						</View>
					),
				}}
			/>
			<MyTabs.Screen
				name="People"
				component={People}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={tw`items-center`}>
							<Ionicons name="people" size={20} style={tw.style(focused ? "text-blue-500" : "text-gray-500")} />
							<Text style={tw.style(focused ? "text-blue-500" : "text-gray-500")}>People</Text>
						</View>
					),
				}}
			/>
			<MyTabs.Screen
				name="Stories"
				component={Stories}
				options={{
					tabBarIcon: ({ focused }) => (
						<View style={tw`items-center`}>
							<MaterialIcons name="auto-stories" size={20} style={tw.style(focused ? "text-blue-500" : "text-gray-500")} />
							<Text style={tw.style(focused ? "text-blue-500" : "text-gray-500")}>Stories</Text>
						</View>
					),
				}}
			/>
		</MyTabs.Navigator>
	);
};

export default BottomTabs;
