import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

function OutlinedButton({ onPress, icon, children }) {
  return <Pressable>
    <Ionicons />
    <Text>{children}</Text>
  </Pressable>;
}

export default OutlinedButton;
