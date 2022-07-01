import { View, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "react-native-vector-icons";
import tw from "twrnc";
const SearchBar = () => {
	return (
		<View style={tw`bg-gray-100 rounded-full mt-4 mx-5`}>
			<View style={tw`flex-row items-center`}>
				<Ionicons name="search" size={14} style={tw`text-gray-500 ml-3`} />
				<TextInput placeholder="Search" style={tw`flex-1 py-1 focus:outline-none ml-2`} />
			</View>
		</View>
	);
};

export default SearchBar;
