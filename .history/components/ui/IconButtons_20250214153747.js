import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";
import {  } from "react-native-gesture-handler";

function IconButton({icon, size, color, onPress}) {
    return (
    <Pressable style={({pressed}) => [styles.button, pressed && styles.pressed]} onPress={onPress}>
        <Ionicons name={icon} size={size} color={color} />
    </Pressable>
    );
}

export default IconButton;

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margins: 5,
        justifyContent: "center",
        alignItems: "center",
    },
    pressed: {
        opacity: 0.5,
    },
});