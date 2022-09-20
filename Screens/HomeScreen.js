import { Alert, StyleSheet,Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { auth } from '../firebase'

const HomeScreen = () => {
  const navigation = useNavigation()

  const handleLogout = () => {
    auth
    .signOut()
    .then(() => {
      navigation.replace("Login")
    })
    .catch(error => Alert.alert(error.message))
  }


  return (
    <View>
      <Text style={styles.container}>Email : {auth.currentUser?.email}</Text>
      <TouchableOpacity
      onPress={handleLogout}
      style={styles.button}>
        <Text style={styles.buttonText} >Log Out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen
const styles = StyleSheet.create({
  container: {
    fontSize:20,
    marginTop:50,
    textAlign:"center"
  },
  button: {
    backgroundColor: "rgb(7,130,249)",
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop:200,
    marginLeft:70
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  }
})

