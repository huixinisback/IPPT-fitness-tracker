import  React, {useState} from 'react';


import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from 'react-native';




const App = () => {
  const [isComplete, setIsComplete] = useState(false);
  
  return (
  
      <View style={styles.container}>
        
        
          <TouchableHighlight
            onPress={() => {
              setIsComplete(!isComplete);

            }}>
            <Text style={styles.buttonText}>
              {!isComplete ? 'To Complete' : 'Completed'}
            </Text>
          </TouchableHighlight>
          
      
      </View>
  
  );
};


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  buttonText: {

    color: 'white',
    backgroundColor: '#b47069',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    padding: 10,
  
  },
});
