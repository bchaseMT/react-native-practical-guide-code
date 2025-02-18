import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function OutlinedButton({ children }) {
  return <Pressable>
    <Ionicons />
    <Text>{}</Text>
  </Pressable>;
}

export default OutlinedButton;
