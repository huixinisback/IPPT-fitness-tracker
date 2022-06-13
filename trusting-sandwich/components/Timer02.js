import  React, {useState} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';


import { Stopwatch, Timer } from 'react-native-stopwatch-timer';

const App = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [isStopwatchStart, setIsStopwatchStart] = useState(false);
  const [timerDuration, setTimerDuration] = useState(640000);
  const [resetTimer, setResetTimer] = useState(false);
  const [resetStopwatch, setResetStopwatch] = useState(false);

  return (
  
      <View style={styles.container}>
        <Text style={styles.title}>
        Timing of 2.4 km run
        </Text>
        
        <Text style={styles.title}>Stopwatch to track how long you took</Text>
          <Stopwatch
            laps
            msecs
            start={isStopwatchStart}
          
            reset={resetStopwatch}
            
            options={options}
          
            getTime={(time) => {
              console.log(time);
            }}
          />
          <Text style={styles.title}>Countdown timer</Text>
          <Timer
            totalDuration={timerDuration}
            msecs
           
            start={isTimerStart}
        
            reset={resetTimer}
        
            options={options}
            //options for the styling
            getTime={(time) => {
              console.log(time);
            }}
          />
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(!isTimerStart);
              setResetTimer(false);            
              setIsStopwatchStart(!isStopwatchStart);
              setResetStopwatch(false);
            }}>
            <Text style={styles.buttonText}>
              {!isTimerStart ? 'START' : 'STOP'}
            </Text>
          </TouchableHighlight>
          <TouchableHighlight
            onPress={() => {
              setIsTimerStart(false);
              setResetTimer(true);
              setIsStopwatchStart(false);
              setResetStopwatch(true);
            }}>
            <Text style={styles.buttonText}>RESET</Text>
          </TouchableHighlight>
      
      </View>
  
  );
};


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10,
  },


  buttonText: {
    fontSize: 15,
    fontWeight:'bold',
    marginTop: 10,
    backgroundColor: '#375e42',
    padding: 3,
    color: 'darkgrey'
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