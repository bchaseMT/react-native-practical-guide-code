const {
  View,
  Button,
  Alert,
  Image,
  Text,
  StyleSheet,
} = require("react-native");
import { Colors } from "@/constants/colors";
import {
  launchCameraAsync,
  PermissionStatus,
  useCameraPermissions,
} from "expo-image-picker";
import { useState } from "react";

function ImagePicker() {
  const [pickedImage, setPickedImage] = useState();

  const [cameraPermissionInformation, requestPermission] =
    useCameraPermissions();

  async function verifyPermissions() {
    if (cameraPermissionInformation.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app."
      );
      return false;
    }
    return true;
  }

  async function takeImageHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
      allowsMultipleSelection: false,
    });

    console.log(image.assets[0].uri);
    setPickedImage(image.assets[0].uri);
  }

  let imagePreview = <Text>No image taken yet.</Text>;

  if (pickedImage) {
    imagePreview = <Image source={{ uri: pickedImage }} />;
    console.log(pickedImage);
    console.log(imagePreview);
  }

  return (
    <View>
      <View style={pickedImagestyles.imagePreview}>{imagePreview}</View>
      <Button title="Take Image" onPress={takeImageHandler} />
    </View>
  );
}

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderWidth: 1,
  },
});
