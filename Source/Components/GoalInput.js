import React,{useState} from 'react'
import {View, Text, StyleSheet, TextInput,Button,Modal, Image} from 'react-native';

const GoalInput= (props) => {
    const [enteredGoalText, setEnteredGoalText] = useState('');
    const goalinputHandler = e => {
      setEnteredGoalText(e);
    };
      const addGoalHandler=()=>{
         props.onAddGoal(enteredGoalText);
         setEnteredGoalText('');
      }
    return (
      <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputcontainer}>
          <Image style={styles.image} source={require('../assets/goal.png')} />
          <TextInput
            style={styles.textInput}
            placeholder="Type Here Your Goal!"
            value={enteredGoalText}
            onChangeText={goalinputHandler}
            placeholderTextColor="#fff"
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Add Goal"
                onPress={addGoalHandler}
                color="#5e0acc"
              />
            </View>
            <View style={styles.button}>
              <Button title="Cancel" onPress={props.onCancel} color="#f" />
            </View>
          </View>
        </View>
      </Modal>
    );
}

export default GoalInput
const styles = StyleSheet.create({
  inputcontainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding:16,

    backgroundColor:'#311b6b'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor:'#e4d0ff',
    width: '100%',
    padding: 16,
    color:'#120438',
    borderRadius:6,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button:{
      marginHorizontal:8,
      width:100,
      margin:10,
      borderRadius:30,  
  },
  image:{
      width:100,
      height:100,
      margin:20
  }
});