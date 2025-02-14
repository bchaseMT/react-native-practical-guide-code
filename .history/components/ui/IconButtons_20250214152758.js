import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({icon, size, color, onPress}) {
    return
    <Pressable>
        <Ionicons name={icon} size={size} color={color} />
    </Pressable>
}

export default IconButton;

const styles = StyleSheet.create({
    button: