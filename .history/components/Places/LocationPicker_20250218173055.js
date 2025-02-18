import { View, StyleSheet } from "react-native";
import OutlinedButton from "@/components/ui/OutlinedButton";

function LocationPicker() {
  function getLocationHandler() {}
  function pickOnMapHandler() {}

  return (
    <>
      <View>
        <View></View>
      </View>
      <View>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  locationPicker: {
    marginBottom: 15,
  },
  mapPreview: {
    marginVertical: 10,
    width: "100%",
    height: 150,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  actions: {

  }
});
