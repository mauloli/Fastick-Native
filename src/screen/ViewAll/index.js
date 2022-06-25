import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import Footer from '../../components/Footer';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';
import Navbar from '../../components/Navbar';

export default function ViewAll(props) {
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(1);
  const [dataMovies, setDataMovies] = useState([]);
  const [selectMonth, setSelectMonth] = useState('');
  const [searchName, setSearchName] = useState('');
  const cloduinaryImage =
    'https://res.cloudinary.com/dfoi1ro2a/image/upload/v1649233762/';
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

  const getAllMovie = async () => {
    try {
      if (page <= totalPage) {
        const result = await axios.get(
          `movie?page=${page}&limit=4&searchName=${searchName}&sortMovie=id DESC&month=${selectMonth}`,
        );
        if (page === 1) {
          setDataMovies(result.data.data);
        } else {
          setDataMovies([...dataMovies, ...result.data.data]);
        }
        setTotalPage(result.data.pagination.totalPage);
        console.log(result.data.pagination);
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleDetail = id => {
    props.navigation.navigate('MovieDetail', {movieId: id});
  };

  const handleViewMore = () => {
    setPage(page + 1);
  };

  const handleMonth = e => {
    // console.log(e);
    setPage(1);
    if (selectMonth === e) {
      setSelectMonth('');
    } else {
      setSelectMonth(e);
    }
  };

  const handleEnter = e => {
    console.log('first');
  };

  const handleChange = e => {
    setPage(1);
    setSearchName(e);
  };
  const sorts = ['name', 'categories'];

  useEffect(() => {
    getAllMovie();
  }, []);
  useEffect(() => {
    getAllMovie();
  }, [page]);
  useEffect(() => {
    getAllMovie();
  }, [selectMonth]);

  useEffect(() => {
    getAllMovie();
  }, [searchName]);
  console.log(searchName);
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

        <TextInput
          placeholder="Search Movie Name"
          style={styles.input}
          onChangeText={text => handleChange(text)}
        />
      </View>

      <ScrollView horizontal={true}>
        {monthsName.map((item, index) => (
          <TouchableOpacity
            style={styles.buttonMonth}
            key={index}
            onPress={() => handleMonth(index + 1)}>
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
        {dataMovies.map((item, index) => (
          <View key={index} style={styles.upcomingBorder}>
            <Image
              style={styles.imgMovie}
              source={{uri: cloduinaryImage + item.image}}
            />
            <Text style={{marginTop: 5, fontSize: 14, color: 'black'}}>
              {item.name}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 11}}>
              {item.category}
            </Text>
            <TouchableOpacity
              onPress={() => handleDetail(item.id)}
              style={styles.buttonDetails}>
              <Text style={{color: '#5F2EEA', fontSize: 10}}>Details</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      {page === totalPage ? (
        <View style={{alignItems: 'center'}}>
          <Text>No more data</Text>
        </View>
      ) : (
        <TouchableOpacity
          onPress={handleViewMore}
          style={{alignItems: 'center', marginTop: 10}}>
          <Text>View More</Text>
        </TouchableOpacity>
      )}

      <Footer />
    </ScrollView>
  );
}
