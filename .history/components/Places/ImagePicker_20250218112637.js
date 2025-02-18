const { View, Button } = require("react-native");
import { launchCameraAsync } from "expo-image-picker";

function ImagePicker() {
  asyncfunction takeImageHandler() {
    launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
  }

  return (
    <View>
      <View></View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;
