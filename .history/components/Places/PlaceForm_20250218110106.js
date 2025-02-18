import { ScrollView, Text, TextInput, View } from "react-native";
import { useState, StyleSheet } from "react";
import { Colors } from "@/constants/colors";

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
    padding: 24,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 4,
    color: Colors.primary500,
  },
  input: {
    
    paddingVertical: 4,
  },
});
