import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

function IconButton({icon, }) {
    return
    <Pressable>
        <Ionicons name="add" size={24} color="black"/>
    </Pressable>
}

export default IconButton;