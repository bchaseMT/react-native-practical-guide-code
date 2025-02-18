import { ScrollView, Text, TextInput, View } from "react-native";


function PlaceForm() {
  const [enteredTitle, setEnteredTitle] = useState("");

  function changeTitleHandler(enteredText) {
    setEnteredTitle(enteredText);
  }

  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput onChangeText={changeTitleHandler} value={enteredTitle} />
      </View>
    </ScrollView>
  );
}

export default PlaceForm;
