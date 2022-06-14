import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import styles from './styles';
import Navbar from '../../components/Navbar';
export default function HomeScreen(props) {
  const monthsName = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'August',
    'september',
    'october',
    'november',
    'december',
  ];
  const movies = [
    {
      name: 'Spiderman',
      image: require('../../assets/spiderman.jpg'),
      genre: 'Action, Adventure,Scify,Hero',
    },
    {
      name: 'Black Widow',
      image: require('../../assets/blackw.jpg'),
      genre: 'Action, Adventure,',
    },
    {
      name: 'Jhon Wick',
      image: require('../../assets/jhonw.jpg'),
      genre: 'Action, Adventure,',
    },
    {
      name: 'Liong King',
      image: require('../../assets/lionking.jpg'),
      genre: 'Action, Adventure,',
    },
    {
      name: 'Tenet',
      image: require('../../assets/tenet.jpg'),
      genre: 'Action, Adventure,',
    },
    {
      name: 'The Witch',
      image: require('../../assets/thew.jpg'),
      genre: 'Action, Adventure,',
    },
  ];
  const handleViewAll = () => {
    props.navigation.navigate('ViewAll');
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.containerMain}>
        <View style={styles.navContain}>{/* <Navbar /> */}</View>
        <View>
          <View style={styles.mainHead}>
            <Text style={{fontSize: 14}}>Nearest Cinema, Newest Movie</Text>
            <Text style={{fontSize: 40, fontWeight: 'bold', color: '#5F2EEA'}}>
              Find Out Now
            </Text>
          </View>
          <View style={styles.mainImg}>
            <Image
              style={{width: '100%'}}
              source={require('../../assets/banner.jpg')}
            />
          </View>
        </View>
      </View>
      <View style={styles.nowShowing}>
        <View style={styles.navMovie}>
          <Text>Now Showing</Text>
          <Text onPress={handleViewAll}>View all</Text>
        </View>
        <ScrollView horizontal={true}>
          {movies.map((item, index) => (
            <View key={index} style={styles.borderMovie}>
              <Image style={styles.imgMovie} source={item.image} />
              <Text style={{marginTop: 5, fontSize: 18, color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{textAlign: 'center'}}>{item.genre}</Text>
              <TouchableOpacity style={styles.buttonDetails}>
                <Text style={{color: '#5F2EEA', fontSize: 10}}>Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.upcoming}>
        <View style={styles.upcomingNav}>
          <Text>Upcoming</Text>
          <Text>View all</Text>
        </View>

        <ScrollView horizontal={true}>
          {monthsName.map((item, index) => (
            <TouchableOpacity style={styles.buttonMonth} key={index}>
              <Text style={{color: 'white'}}>{item}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <ScrollView horizontal={true}>
          {movies.map((item, index) => (
            <View key={index} style={styles.upcomingBorder}>
              <Image style={styles.imgMovie} source={item.image} />
              <Text style={{marginTop: 5, fontSize: 18, color: 'black'}}>
                {item.name}
              </Text>
              <Text style={{textAlign: 'center'}}>{item.genre}</Text>
              <TouchableOpacity style={styles.buttonDetails}>
                <Text style={{color: '#5F2EEA', fontSize: 10}}>Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View style={[styles.movieGoers, styles.elevation]}>
          <View style={{alignItems: 'center', marginBottom: 42}}>
            <Text style={{fontSize: 14}}>Be the vanguard of the</Text>
            <Text style={{fontSize: 32, color: '#5F2EEA', fontWeight: 'bold'}}>
              Moviegoers
            </Text>
          </View>
          <View
            style={{
              borderWidth: 1,
              width: '80%',
              borderColor: '#DEDEDE',
              marginBottom: 16,
            }}>
            <TextInput placeholder="Type Your Email" />
          </View>
          <TouchableOpacity style={styles.buttonJoin}>
            <Text style={{color: 'white'}}>Join Now</Text>
          </TouchableOpacity>
          <View style={{alignItems: 'center'}}>
            <Text>By joining you as a Tickitz member</Text>
            <Text>we will always send you the</Text>
            <Text>latest updates via email .</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
