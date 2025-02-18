import { Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { Colors } from "@/constants/colors";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";

function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable style={({pressed})} onPress={onPress}>
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
    margin: 4,
    borderWidth: 1,
    borderColor: Colors.primary500,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
