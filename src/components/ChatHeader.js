import { View, Text, Image } from "react-native";
import React from "react";
import { Entypo, MaterialIcons } from "react-native-vector-icons";
import tw from "twrnc";
const ChatHeader = () => {
	return (
		<View style={tw`flex-row justify-between items-center px-5`}>
			<View style={tw`flex-row items-center`}>
				<Image
					source={{
						uri: "https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
					}}
					style={tw`w-10 h-10 rounded-full mr-4`}
				/>
				<Text style={tw`text-[22px] font-bold`}>Chats</Text>
			</View>
			<View style={tw`flex-row items-center`}>
				<View style={tw`w-8 h-8 justify-center items-center bg-gray-100 rounded-full mr-4`}>
					<Entypo name="camera" size={18} style={tw`text-black`} />
				</View>
				<View style={tw`w-8 h-8 justify-center items-center bg-gray-100 rounded-full`}>
					<MaterialIcons name="edit" size={18} style={tw`text-black`} />
				</View>
			</View>
		</View>
	);
};

export default ChatHeader;
