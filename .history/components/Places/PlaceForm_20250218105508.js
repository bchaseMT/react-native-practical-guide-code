import { ScrollView, Text, TextInput, View } from "react-native";

function PlaceForm() {
    const [enteredTitle, setEnteredTitle] = useState('');

    function changeTitleHandler(entered) {
        
    }
  return (
    <ScrollView>
      <View>
        <Text>Title</Text>
        <TextInput onChange={() => {}} />
      </View>
    </ScrollView>
  );
}

export default PlaceForm;
