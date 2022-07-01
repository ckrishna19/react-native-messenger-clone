import { View, Text, Image, FlatList, Animated } from "react-native";
import React from "react";
import tw from "twrnc";
import { MaterialIcons } from "react-native-vector-icons";
const OnlineUser = () => {
	const scrollX = new Animated.Value(0);
	const translateX = scrollX.interpolate({
		inputRange: [-20, 0],
		outputRange: [20, 0],
	});
	const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

	return (
		<View style={tw` mt-5`}>
			<View style={tw`flex-row relative`}>
				<Animated.View
					style={{
						transform: [
							{
								translateX: translateX,
							},
						],
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
					}}
				>
					<View style={tw`items-center px-3`}>
						<View style={tw`w-12 h-12 rounded-full bg-gray-100 items-center justify-center`}>
							<MaterialIcons name="video-call" style={tw`text-black`} size={22} />
						</View>
						<View style={tw` justify-center mt-1`}>
							<Text style={{ fontSize: 10 }}>Create Video</Text>
							<Text style={tw`ml-5 text-xs`}>call</Text>
						</View>
					</View>
				</Animated.View>
				<FlatList
					key={(item) => item.index}
					style={tw`pl-16 z-10`}
					onScroll={(e) => scrollX.setValue(e.nativeEvent.contentOffset.x)}
					data={array}
					renderItem={(elem) => {
						return (
							<View style={tw`mx-2`}>
								<View style={tw`relative`}>
									<View style={tw`w-12 h-12 rounded-full bg-purple-500 items-center justify-center`}>
										<Image
											source={{ uri: "https://www.slazzer.com/static/images/home-page/individual-image-upload.jpg" }}
											style={tw`w-11 h-11 rounded-full bg-red-500`}
										/>
									</View>

									<View style={tw`w-4 h-4 rounded-full bg-green-400 border-2 border-gray-300 ml-8 -mt-4`} />
								</View>
								<View>
									<Text style={tw`text-xs `}>Rasmika</Text>
									<Text style={tw`text-xs `}>Mandana</Text>
								</View>
							</View>
						);
					}}
					horizontal={true}
					bounces={false}
					keyExtractor={(item) => item.index}
					showsHorizontalScrollIndicator={false}
				/>
			</View>
		</View>
	);
};

export default OnlineUser;
