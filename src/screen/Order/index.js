import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import Seat from '../../components/Seat';
import {useDispatch, useSelector} from 'react-redux';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function OrderPage(props) {
  const orderInfo = useSelector(state => state.createOrder.data.dataSchedule);
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    getBooking();
  }, []);

  const getBooking = async () => {
    const dateBooking = orderInfo.dateOrder.toISOString().split('T')[0];
    try {
      const result = await axios.get(
        `/booking/?scheduleId=${orderInfo.id}&dateBooking=${dateBooking}&timeBooking=${orderInfo.timeOrder}`,
      );
      console.log(result.data.data);
      setReservedSeat(result.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  const handleCheckout = async () => {
    try {
      const userId = await AsyncStorage.getItem('userId');
      const dateBooking = orderInfo.dateOrder.toISOString().split('T')[0];
      const setData = {
        userId: userId,
        scheduleId: orderInfo.id,
        dateBooking: dateBooking,
        timeBooking: orderInfo.timeOrder,
        paymentMethod: '',
        totalPayment: selectedSeat.length * orderInfo.price,
        seat: selectedSeat,
      };
      if (selectedSeat.length >= 1) {
        const result = await axios.post('booking', setData);
        await dispatch({
          type: 'ADD_URL',
          data: result.data.data.redirectUrl,
        });
        console.log(result.data.data);
        props.navigation.navigate('PaymentPage');
      } else {
        alert('please choose seat!');
      }
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  const currency = new Intl.NumberFormat('id-ID', {
    // style: "currency",
    currency: 'IDR',
  });
  console.log(selectedSeat);
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Text style={{fontSize: 18, color: 'black'}}>Choose your seat</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View style={{backgroundColor: 'white', width: '90%'}}>
          <View style={styles.container}>
            {/* <Text>Order Screen</Text> */}

            <View style={{alignItems: 'center', marginTop: 20}}>
              <View
                style={{
                  borderWidth: 1,
                  width: '90%',
                  borderColor: '#9570FE',
                }}
              />
            </View>

            <View style={{margin: 20}}>
              <FlatList
                data={listSeat}
                keyExtractor={item => item}
                renderItem={({item}) => (
                  <Seat
                    seatAlphabhet={item}
                    reserved={reservedSeat}
                    selected={selectedSeat}
                    selectSeat={handleSelectedSeat}
                  />
                )}
              />
            </View>
            {/* <Button title="Booking" onPress={handleBookingSeat} /> */}
            <View style={{alignItems: 'center'}}>
              <View
                style={{borderWidth: 1, width: '90%', borderColor: 'red'}}
              />
            </View>
            <View style={{margin: 20}}>
              <Text style={{marginBottom: 18, fontSize: 16, color: 'black'}}>
                Seating Key
              </Text>

              <View style={{flexDirection: 'row', marginBottom: 14}}>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Icon size={20} name="arrowdown" />
                  <Text style={{fontSize: 15, marginLeft: 10, color: 'black'}}>
                    A-G
                  </Text>
                </View>
                <View
                  style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
                  <Icon size={20} name="arrowright" />
                  <Text style={{fontSize: 15, marginLeft: 10, color: 'black'}}>
                    1-14
                  </Text>
                </View>
              </View>

              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={styles.detailColor}>
                  <View
                    style={{width: 20, height: 20, backgroundColor: '#D6D8E7'}}
                  />
                  <Text>Available</Text>
                </View>

                <View style={styles.detailColor}>
                  <View
                    style={{width: 20, height: 20, backgroundColor: '#5F2EEA'}}
                  />
                  <Text>Selected</Text>
                </View>

                <View style={styles.detailColor}>
                  <View
                    style={{width: 20, height: 20, backgroundColor: '#6E7191'}}
                  />
                  <Text>Sold</Text>
                </View>
              </View>
            </View>
            <View style={{alignItems: 'center', marginBottom: 20}}>
              <View style={{width: '90%'}}>
                <Button title="Reset" onPress={handleResetSeat} />
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={{padding: 20}}>
        <Text style={{fontSize: 18, color: 'black'}}>Order Info</Text>
      </View>

      <View style={{alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            alignItems: 'center',
          }}>
          <View style={{alignItems: 'center', marginBottom: 25}}>
            <Text
              style={{
                fontSize: 24,
                color: '#394BA7',
                fontWeight: 'bold',
                marginBottom: 9,
                marginTop: 30,
              }}>
              {orderInfo.premier}
            </Text>

            <Text style={{fontSize: 17, color: 'black'}}>{orderInfo.name}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text style={{flex: 1}}>{orderInfo.dateOrder.toDateString()}</Text>
            <Text style={{color: 'black'}}>{orderInfo.timeOrder}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <Text style={{flex: 1}}>One ticket price</Text>
            <Text style={{color: 'black'}}>
              {currency.format(orderInfo.price)}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 30,
            }}>
            <Text style={{flex: 1}}>Seat choosed</Text>
            <Text style={{color: 'black'}}>{selectedSeat.join(',')}</Text>
          </View>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: 'black',
              width: '100%',
              marginBottom: 20,
            }}
          />

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              marginBottom: 30,
            }}>
            <Text style={{flex: 1, fontSize: 18, color: 'black'}}>
              Total Payment
            </Text>
            <Text style={{fontSize: 18, fontWeight: '600', color: '#5F2EEA'}}>
              {currency.format(selectedSeat.length * orderInfo.price)}
            </Text>
          </View>
        </View>
      </View>

      <View style={{alignItems: 'center'}}>
        <TouchableOpacity onPress={handleCheckout} style={styles.buttonOrder}>
          <Text style={{color: 'white'}}>Checkout Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
