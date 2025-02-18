const { View, Button } = require("react-native");
import { launchCameraAsync } from "expo-image-picker";   

function ImagePicker() {
    function takeImageHandler() {
        launchCameraAsync
        
    }

    return (
        <View>
            <View>

            </View>
            <Button title="Take Image" onPress={}/>
        </View>
    );
}

export default ImagePicker;