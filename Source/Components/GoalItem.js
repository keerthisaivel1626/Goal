import React from 'react';
import { View, Text,StyleSheet,Pressable } from 'react-native'

const GoalItem= (props) => {
     
    return (
      <View key={props.data.text} style={styles.goalData}>
        <Pressable
          android_ripple={{color: '#70009D'}}
          onPress={props.onDeleteItems.bind(this, props.data.id)}
          style={({pressed}) => {
            pressed && styles.PressableItem;
          }}>
          <Text
            style={{
              color: 'white',
              fontSize: 18,
              padding: 12,
              fontWeight: '600',
            }}>
            {props.data.text}
          </Text>
        </Pressable>
      </View>
    );
}

export default GoalItem;
const styles = StyleSheet.create({
  goalData: {
    margin: 8,

    borderWidth: 2,
    borderRadius: 8,
    borderColor: '#5e0aaa',
    backgroundColor: '#5e0acc',
  },
  PressableItem:{
    opacity:0.5

  }
});
