import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import {NativeBaseProvider, Box} from 'native-base';
import DatePicker from 'react-native-date-picker';
import {Button} from 'react-native';
import styles from './styles';
import Footer from '../../components/Footer';

export default function MovieDetail(props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const handleOrder = () => {
    props.navigation.navigate('OrderPage');
  };
  const border = [1, 2];
  console.log(date.toISOString().split('T')[0]);
  return (
    <ScrollView>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View style={styles.borderImg}>
          <Image
            style={{height: 240}}
            source={require('../../assets/spiderman.jpg')}
          />
        </View>
      </View>
      <View style={{alignItems: 'center', backgroundColor: 'white'}}>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
            Spiderman
          </Text>
          <Text style={{fontSize: 16, marginTop: 8}}>Adventure,Action</Text>
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
              <Text style={{fontSize: 16, color: 'black'}}>June 28, 2017</Text>
            </View>
            <View>
              <Text style={{fontSize: 13}}>Duration</Text>
              <Text style={{fontSize: 16, color: 'black'}}>2 hrs 13min</Text>
            </View>
          </View>

          <View style={{flex: 1}}>
            <View style={{marginBottom: 20}}>
              <Text style={{fontSize: 13}}>Direct by</Text>
              <Text style={{fontSize: 16, color: 'black'}}>Jhon wats</Text>
            </View>
            <View>
              <Text style={{fontSize: 13}}>Cast</Text>
              <Text style={{fontSize: 16, color: 'black'}}>
                Tom Holland, Robert ...
              </Text>
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
        <Text style={{fontSize: 13, marginBottom: 50}}>
          Thrilled by his experience with the Avengers, Peter returns home,
          where he lives with his Aunt May, under the watchful eye of his new
          mentor Tony Stark, Peter tries to fall back into his normal daily
          routine - distracted by thoughts of proving himself to be more than
          just your friendly neighborhood Spider-Man - but when the Vulture
          emerges as a new villain, everything that Peter holds most important
          will be threatened.
        </Text>
      </View>

      <View style={{alignItems: 'center', marginTop: 40, marginBottom: 48}}>
        <View>
          <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
            Showtime And Tickets
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <SelectDropdown
            data={['satu', 'dua']}
            onSelect={(item, index) => {
              console.log(item);
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

      {border.map((item, index) => (
        <View key={item} style={{alignItems: 'center'}}>
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
              Ebu.Id
            </Text>
            <Text
              style={{
                textAlign: 'center',
                width: 200,
                fontSize: 13,
                color: '#AAAAAA',
              }}>
              Whatever street No.12, South Purwokerto
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
              }}>
              <Text style={{margin: 10}}>08:30am</Text>
              <Text style={{margin: 10}}>08:30am</Text>
              <Text style={{margin: 10}}>08:30am</Text>
              <Text style={{margin: 10}}>08:30am</Text>
              <Text style={{margin: 10}}>08:30am</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: 10,
                marginBottom: 25,
              }}>
              <Text style={{flex: 1}}>Price</Text>
              <Text>$10.00/seat</Text>
            </View>
            <TouchableOpacity onPress={handleOrder} style={styles.buttonBook}>
              <Text style={{color: 'white'}}>Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
      <View style={{alignItems: 'center', marginBottom: 30}}>
        <Text>View More</Text>
      </View>

      <View style={{backgroundColor: 'white'}}>
        <Footer />
      </View>
    </ScrollView>
  );
}
