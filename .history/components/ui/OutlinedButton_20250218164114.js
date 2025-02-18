import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/colors";

function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable onPress={onPress}>
      <Ionicons name={icon} size={18} color={Colors.primary500} />
      <Text>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderWidth: 1,
    borderRadius: 5,
  },
  pressed: {
    backgroundColor: Colors.primary100,
  },
  icon: {
    marginRight: 5,
  },
  text: {
    color: Colors.primary500,
  },
});
