import { ScrollView, Text, TextInput, View } from "react-native";
import { useState, StyleSheet } from "react";

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

const styles = StyleSheet.create({
  form: {
    flex: 1,
    margin: 20,
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    borderBottomColor: Colors.primary200,
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 4,
  },
});
