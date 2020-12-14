import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import { Button, Card, Text } from 'react-native-elements';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

// function HomeScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button
//         onPress={() => navigation.navigate('Notifications')}
//         title="Go to notifications"
//       />
//     </View>
//   );
// }

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

// const Drawer = createDrawerNavigator();

// export default function HomeScreen() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator initialRouteName="Home">
//         <Drawer.Screen name="Home" component={HomeScreen} />
//         <Drawer.Screen name="Notifications" component={NotificationsScreen} />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

const Home = ({navigation}) => (
  <SafeAreaView style={styles.container}>
    <View>
    <Card style={styles.container}>
          <Text h4 style={{textAlign:'center'}}>PT INALUM (Persero)</Text>
    </Card>
    </View>
    <View style={styles.sliderContainer}>
      <Swiper
        autoplay
        horizontal
        height={200}
        activeDotColor="#FF6347"
      >
        <View style={styles.slide}>
          <Image
            source={require('../../assets/img/ingot.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/img/billet.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
        <View style={styles.slide}>
          <Image
            source={require('../../assets/img/alloy.jpg')}
            resizeMode="cover"
            style={styles.sliderImage}
          />
        </View>
      </Swiper>
    </View>

    <View style={{flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 20, marginTop: 50,}}>
      <View style={{justifyContent: 'center', flexDirection: 'row', width: '100%', marginBottom: 50}}>
        <View>
        <Card style={styles.container}>
          <Card.Title>INALUM Products</Card.Title>
          <Card.Divider/>
          <Image source={require('../../assets/img/products.jpg')}/>
          <Text style={{marginBottom: 5}}>- Aluminium Ingot</Text>
          <Text style={{marginBottom: 5}}>- Aluminium Billet, dan</Text>
          <Text style={{marginBottom: 5}}>- Aluminium Alloy</Text>
          <Button
            buttonStyle={{borderRadius: 5, marginLeft: 0, marginRight: 0, marginBottom: 0}}
            title='Buy' />
        </Card>
        
        </View>
      </View>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  sliderContainer: {
    height: 200,
    width: '90%',
    marginTop: 30,
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 5,
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    borderRadius: 8,
  },
  sliderImage: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
  },
  
});

export default Home;