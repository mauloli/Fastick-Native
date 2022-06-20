import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {NativeBaseProvider, Box} from 'native-base';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

export default function MovieDetail(props) {
  const cloduinaryImage =
    'https://res.cloudinary.com/dfoi1ro2a/image/upload/v1649233762/';
  // console.log(props.route.params.movieId);

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [dataSchedule, setDataSchedule] = useState([]);
  const [page, setPage] = useState(1);
  const [city, setCity] = useState('');
  const [totalPage, setTotalPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const [scheduleId, setScheduleId] = useState();
  const [timeSelect, setTimeSelect] = useState('');
  const handleOrder = () => {
    props.navigation.navigate('OrderPage');
  };
  console.log(date.toISOString().split('T')[0]);

  const getDataMovie = async () => {
    try {
      const id = props.route.params.movieId;
      const result = await axios.get(`movie/${id}`);
      setData(result.data.data[0]);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const getAllSchedule = async () => {
    try {
      const movieId = props.route.params.movieId;
      console.log(movieId);
      if (page <= totalPage) {
        const result = await axios.get(
          `schedule/?page=${page}&limit=2&searchMovieid=${movieId}&searchLocation=${city}`,
        );
        // console.log(result.data.data);
        if (page === 1) {
          setDataSchedule(result.data.data);
        } else {
          setDataSchedule([...dataSchedule, ...result.data.data]);
        }
        console.log(result.data.pagination);
        setTotalPage(result.data.pagination.totalPage);
        setLoading(false);
        setRefresh(false);
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const handleLocation = city => {
    setPage(1);
    if (city === 'All') {
      setCity('');
    } else {
      setCity(city);
    }
  };

  const handleTimeSelect = (scheduleId, time) => {
    setScheduleId(scheduleId);
    setTimeSelect(time);
  };

  const handleViewMore = () => {
    setPage(page + 1);
    setLoading(true);
  };

  const handleRefresh = () => {
    setPage(1);
    if (page !== 1) {
      setRefresh(true);
    } else {
      getAllSchedule();
    }
  };
  useEffect(() => {
    getDataMovie();
    getAllSchedule();
  }, []);
  useEffect(() => {
    getAllSchedule();
  }, [page]);
  useEffect(() => {
    getAllSchedule();
  }, [city]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refresh} onRefresh={handleRefresh} />
      }>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View style={styles.borderImg}>
          <Image
            style={{height: '85%', width: '80%'}}
            source={{uri: `${cloduinaryImage}${data.image ? data.image : ''}`}}
          />
        </View>
      </View>

      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            {data.name}
          </Text>
          <Text style={{fontSize: 16, marginTop: 8}}>{data.category}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 30,
            marginTop: 10,
          }}>
          <View style={{flex: 1}}>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13}}>Release Date</Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                {data.releaseDate ? data.releaseDate.split('T')[0] : ''}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13}}>Duration</Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                {data.duration}
              </Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13}}>Direct By</Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                {data.director}
              </Text>
            </View>
            <View>
              <Text style={{fontSize: 13}}>Cast</Text>
              <Text style={{fontSize: 16, color: 'black'}}>{data.cast}</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{borderWidth: 0.5, width: '90%'}} />
      </View>

      <View style={{padding: 30, backgroundColor: 'white'}}>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: 'black',
            marginBottom: 16,
          }}>
          Synopsis
        </Text>
        <Text style={{fontSize: 13, marginBottom: 50}}>{data.synopsis}</Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 40, marginBottom: 48}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Showtime And Tickets
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <SelectDropdown
            data={['All', 'Tangerang', 'bontang', 'Bogor', 'Tasik', 'jakarta']}
            onSelect={(item, index) => {
              handleLocation(item);
            }}
            defaultButtonText="Set a City"
            buttonStyle={{
              width: 260,
              borderRadius: 4,
              backgroundColor: '#F5F6F8',
              //   borderWidth: 1,
              marginBottom: 12,
            }}
          />
          <TouchableOpacity
            style={{
              backgroundColor: '#F5F6F8',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onPress={() => setOpen(true)}>
            <Text style={{color: 'black', fontSize: 16, fontWeight: '500'}}>
              {date.toDateString()}
            </Text>
          </TouchableOpacity>
        </View>

        <DatePicker
          modal
          open={open}
          date={date}
          mode="date"
          locale="id"
          onConfirm={date => {
            setOpen(false);
            setDate(date);
          }}
          onCancel={() => {
            setOpen(false);
          }}
        />
      </View>
      <FlatList
        data={dataSchedule}
        keyExtractor={item => item.id}
        ListFooterComponent={() => (
          <View style={{alignItems: 'center', marginBottom: 30}}>
            {loading ? (
              <ActivityIndicator />
            ) : page == totalPage || page > totalPage ? (
              <Text>No more data</Text>
            ) : (
              <TouchableOpacity onPress={handleViewMore}>
                <Text>View More</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
        renderItem={({item}) => (
          <View style={{alignItems: 'center'}}>
            <View
              style={{
                backgroundColor: 'white',
                width: '90%',
                padding: 20,
                alignItems: 'center',
                marginBottom: 30,
                borderRadius: 8,
              }}>
              <Text
                style={{
                  fontWeight: 'bold',
                  color: 'black',
                  fontSize: 30,
                  marginBottom: 12,
                }}>
                {item.premier}
              </Text>
              <Text
                style={{
                  textAlign: 'center',
                  width: 200,
                  fontSize: 13,
                  color: '#AAAAAA',
                }}>
                {item.location}
              </Text>
              <View style={{alignItems: 'center'}}>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: '#DEDEDE',
                    width: 300,
                    marginTop: 23,
                    marginBottom: 16,
                  }}
                />
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  marginBottom: 23,
                  alignItems: 'flex-start',
                  justifyContent: 'flex-start',
                }}>
                {item.time.split(',').map((item2, index) => (
                  <TouchableOpacity
                    onPress={() => handleTimeSelect(item.id, item2)}>
                    <Text
                      key={index}
                      style={[
                        {margin: 10},
                        item.id === scheduleId && timeSelect === item2
                          ? {backgroundColor: '#5F2EEA', color: 'white'}
                          : '',
                      ]}>
                      {item2}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 10,
                  marginBottom: 25,
                }}>
                <Text style={{flex: 1}}>Price</Text>
                <Text>{item.price}/seat</Text>
              </View>
              <TouchableOpacity onPress={handleOrder} style={styles.buttonBook}>
                <Text style={{color: 'white'}}>Book Now</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      {/* -------------------- */}

      <View style={{backgroundColor: 'white'}}>
        <Footer />
      </View>
    </ScrollView>
  );
}
