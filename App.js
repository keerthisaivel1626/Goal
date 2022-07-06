/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React ,{useState}from 'react';

import {
  StyleSheet,
  TextInput,
  View,
  Button,
  FlatList,
  StatusBar
} from 'react-native';
import GoalItem from './Source/Components/GoalItem';
import GoalInput from './Source/Components/GoalInput';
const App = () => {
  
  const[goalData,setGoalData]=useState([]);
  const[showModal,SetShowModal]=useState(false)
  
  const addGoalHandler = enteredGoalText => {
    setGoalData(currentcourseGoals => [
      ...currentcourseGoals,
      {text: enteredGoalText, id: Math.random().toString()},
    ]);
   endAddGoalHandler();
  };
  const deleteGoalHandler=(id)=>{
     setGoalData(currentcourseGoals => {
     return currentcourseGoals.filter((goalitem)=>goalitem.id!==id);
     });
    }
    const startAddGoalHandler=()=>
    {
      SetShowModal(true);
     
    }
    const endAddGoalHandler=()=>{
       SetShowModal(false);
    }
    
  return (
    <>
      <StatusBar
        backgroundColor={'white'}
        barStyle={'dark-content'}
        translucent={false}
      />
      <View style={styles.appcontainer}>
        <Button
          onPress={() => startAddGoalHandler()}
          color="#a065ec"
          title="Add New  Goal!"
        />
        <GoalInput
          visible={showModal}
          onAddGoal={addGoalHandler}
          onCancel={endAddGoalHandler}
        />
        <View style={styles.goalcontainer}>
          <FlatList
            data={goalData}
            renderItem={itemData => {
              return (
                <GoalItem
                  data={itemData.item}
                  onDeleteItems={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}></FlatList>

          {/* <ScrollView alwaysBounceVertical={false}>
          {goalData.map((goal, index) => {
            return (
              <View key={index} style={styles.goalData}>
                <Text style={{color: 'white', fontSize: 18, fontWeight: '600'}}>
                  {goal}
                </Text>
              </View>
            );
          })}
        </ScrollView> */}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,
    backgroundColor:'#1e085a'
  },
  goalcontainer: {
    flex: 4,
  },
 
});

export default App;
