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
        <OutlinedButton icon="location">Locate User</OutlinedButton>
        <OutlinedButton icon="map">Pick on Map</OutlinedButton>
      </View>
    </>
  );
}

export default LocationPicker;
