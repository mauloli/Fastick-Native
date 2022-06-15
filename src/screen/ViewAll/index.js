import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import Navbar from '../../components/Navbar';
export default function ViewAll(props) {
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
  const sorts = ['name', 'categories'];

  const handleDetail = () => {
    props.navigation.navigate('MovieDetail');
  };
  return (
    <ScrollView style={styles.containerMain}>
      <View style={{marginBottom: 15}}>
        <Text style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
          List Movie
        </Text>
      </View>
      <View style={styles.searchSort}>
        <View style={{marginRight: 30}}>
          <SelectDropdown
            data={sorts}
            onSelect={(item, index) => {
              console.log(item);
            }}
            defaultButtonText="sort"
            buttonStyle={{
              width: 90,
              borderRadius: 16,
              borderWidth: 1,
              backgroundColor: 'white',
              borderColor: '#DEDEDE',
            }}
            buttonTextStyle={{color: '#4E4B66'}}
          />
        </View>

        <TextInput placeholder="Search Movie Name" style={styles.input} />
      </View>

      <ScrollView horizontal={true}>
        {monthsName.map((item, index) => (
          <TouchableOpacity style={styles.buttonMonth} key={index}>
            <Text style={{color: 'white'}}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
        }}>
        {movies.map((item, index) => (
          <View key={index} style={styles.upcomingBorder}>
            <Image style={styles.imgMovie} source={item.image} />
            <Text style={{marginTop: 5, fontSize: 14, color: 'black'}}>
              {item.name}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 11}}>
              {item.genre}
            </Text>
            <TouchableOpacity
              onPress={handleDetail}
              style={styles.buttonDetails}>
              <Text style={{color: '#5F2EEA', fontSize: 10}}>Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
