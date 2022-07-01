import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomTabs from "./BottomTabs";
export default function App() {
	return (
		<NavigationContainer>
			<StatusBar style="dark" backgroundColor="white" />
			<BottomTabs />
		</NavigationContainer>
	);
}
