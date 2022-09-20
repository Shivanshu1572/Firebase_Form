import { KeyboardAvoidingView, StyleSheet, Text, TextInput, Image, TouchableOpacity, View, Alert } from 'react-native'
import React,{useState,useEffect} from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')


  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if(user) {
        navigation.navigate("Home")
      }
    })
    return unsubscribe
  }, [])

  const handlesignUp = () => {
    auth
     .createUserWithEmailAndPassword(email, password)
     .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Registered with:',user.email)
     })
     .catch(error => Alert.alert(error.message))
  }

  const handleLogin = () => {
    auth
     .signInWithEmailAndPassword(email, password)
     .then(userCredentials => {
      const user = userCredentials.user;
      console.log('Login with:',user.email)
     })
     .catch(error => Alert.alert(error.message))
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
    //  behavior="padding"
    >
      <Text style={{fontWeight:"bold",fontSize:20,marginBottom:20}}>React Native Firebase</Text>
      <Image
        style={{ width: 100, height: 100 }}
        source={{
          uri: 'https://static.invertase.io/assets/React-Native-Firebase.png',
        }}
      />


      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Email'
           value = {email}
            onChangeText = {text =>setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder='Password'
           value = {password}
           onChangeText = {text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text styles={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlesignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text styles={styles.buttonOutlinetext}>Register</Text>
        </TouchableOpacity>

      </View>

    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    width: '80%',
    marginTop: 10

  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertaical: 10,
    borderRadius: 10,
    height: 50,
    marginTop: 10,
    fontSize: 16,
    fontWeight: "700"
  },
  buttonOutlinetext: {
    color: "#0782F9",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: "rgb(7,130,249)",
    width: '130%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  }
})