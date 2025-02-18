import { View } from "react-native";
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


