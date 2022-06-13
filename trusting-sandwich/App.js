import  React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  SafeAreaView,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import RecordTimer from './components/Timer'
import RecordTimer1 from './components/Timer01'
import RecordTimer2 from './components/Timer02'
import CompletedTask from './components/Complete';
import Trial from './components/Trial'


function passTraining({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Nice! You chose to train to pass!</Text>
      <Text style={styles.paragraph}>{"Let's get started with training!"}</Text>
      <TouchableHighlight
        style={styles.box}
        onPress={() => navigation.navigate('Pass Training Tasks')}>
        <Text>{"Let's Go!"}</Text>
      </TouchableHighlight>
    </View>
  );
}

function silverTraining({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {' '}
        'Nice! You chose to train to get silver!'
      </Text>
      <Text style={styles.paragraph}>{"Let's get started with training!"}</Text>
      <TouchableHighlight
        style={styles.box}
        onPress={() => navigation.navigate('Silver Training Tasks')}>
        <Text>{"Let's Go!"}</Text>
      </TouchableHighlight>
    </View>
  );
}

function goldTraining({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        {' '}
        'Nice! You chose to train to get gold!'
      </Text>
      <Text style={styles.paragraph}>{"Let's get started with training!"}</Text>
      <TouchableHighlight
        style={styles.box}
        onPress={() => navigation.navigate('Gold Training Tasks')}>
        <Text>{"Let's Go!"}</Text>
      </TouchableHighlight>
    </View>
  );
}

function welcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Welcome to the IPPT fitness tracker.</Text>
      <Text style={styles.paragraph}>Please select your training mode</Text>

      <Card style={styles.card} onPress={() => navigation.navigate('Pass')}>
        <Text style={styles.paragraph}> Pass</Text>
      </Card>
      <Text> </Text>
      <Card style={styles.card} onPress={() => navigation.navigate('Silver')}>
        <Text style={styles.paragraph}>Silver</Text>
      </Card>
      <Text> </Text>
      <Card style={styles.card} onPress={() => navigation.navigate('Gold')}>
        <Text style={styles.paragraph}>Gold</Text>
      </Card>
    </View>
  );
}




function passTrainingMode({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.task}>Here are your tasks for today:</Text>
      <Text style={styles.task}>Complete 30 pushups in a minute</Text>
       <CompletedTask/>
      <Text style={styles.task}>Complete 30 situps in a minute</Text>
        <CompletedTask/>
      <Text style={styles.task} onPress={CompletedTask}>Complete 2.4 km run in 13 min 50 s</Text>
       <CompletedTask/>
       <View><RecordTimer/></View>
    </View>
    </ScrollView>
    
  );
}

function silverTrainingMode({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.task}>Here are your tasks for today:</Text>
      <Text style={styles.task}>Complete 40 pushups in a minute</Text>
       <CompletedTask/>
      <Text style={styles.task}>Complete 40 situps in a minute</Text>
        <CompletedTask/>
      <Text style={styles.task}>Complete 2.4 km run in 12 min 00 s</Text>
        <CompletedTask/>
        <View><RecordTimer1/></View>
    </View>
    </ScrollView>
  );
}

function goldTrainingMode({ navigation }) {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.task}>Here are your tasks for today:</Text>
      <Text style={styles.task}>Complete 50 pushups in a minute</Text>
       <CompletedTask/>
      <Text style={styles.task}>Complete 50 situps in a minute</Text>
       <CompletedTask/>
      <Text style={styles.task}>Complete 2.4 km run in 10 min 40 s</Text>
        <CompletedTask/>
        <View><RecordTimer2/></View>
    </View>
    </ScrollView>
  );
}



 export default function App() {
  let [complete,setComplete]=useState(0)
  function completedTask(){
    if (complete<=3){
      setComplete(complete+1)
    }
  }
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );

}
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={welcomePage} />
      <Stack.Screen name="Pass" component={passTraining} />
      <Stack.Screen name="Silver" component={silverTraining} />
      <Stack.Screen name="Gold" component={goldTraining} />
      <Stack.Screen name="Pass Training Tasks" component={passTrainingMode} />
      <Stack.Screen
        name="Silver Training Tasks"
        component={silverTrainingMode}
      />
      <Stack.Screen name="Gold Training Tasks" component={goldTrainingMode} />
      <Stack.Screen name="Trial" component={Trial} />
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#375e42',
    padding: 8,
  },
  paragraph: {
    color: 'black',
    margin: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#b47069',
    marginHorizontal: 50,
    paddingTop: -10,
  },
  box: {
    color: '#375e42',
    backgroundColor: '#b47069',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    padding: 10,
  },
  task: {
    fontWeight: 'bold',
    padding: 20,
    fontSize: 16,
  },
});

const options = {
  container: {
    color: '#FFF',
    backgroundColor: '#b47069',
    padding: 5,
    borderRadius: 5,
    width: 160,
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#FFF',
    marginLeft: 7,
  },
};
