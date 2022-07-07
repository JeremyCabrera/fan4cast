import React, {useState, useCallback} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },

  image: {
    flex: 1,
    flexDirection: 'column',
  },

  textInput: {
    borderBottomWidth: 3,
    padding: 5,
    paddingVertical: 20,
    marginVertical: 100,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    fontSize: 19,
    borderRadius: 16,
    borderBottomColor: '#df8e00',
  }
});

const App = () => {
  const [input,setInput] = useState("");
  const [loading,setLoading] =useState(false);
  const [data,setData] = useState([]);

  const fetchDataHandler = useCallback(() => {}, []);


  return <View style={styles.root}>
    <ImageBackground 
    source={require('./assets/clTigers.jpg')}
    resizeMode="cover"
    style={styles.image}>
      <View>
        <TextInput placeholder='Enter your team'
        onChangeText={text=>setInput(text)} 
        value={input}
        placeholderTextColor={'#fff'}
        style={styles.textInput}
        onSubmitEditing={fetchDataHandler}
        />
      </View>


    </ImageBackground>
    
  </View>
};

export default App;