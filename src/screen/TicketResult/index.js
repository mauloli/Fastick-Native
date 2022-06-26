import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';
import QRCode from 'react-native-qrcode-svg';
export default function TicketResult(props) {
  console.log(props.route.params);
  const {id, name, category, dateBooking, timeBooking, seat, totalPayment} =
    props.route.params.data;
  console.log(dateBooking);
  {
    return (
      <ScrollView style={{backgroundColor: '#F5F6F8'}}>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <View
            style={{backgroundColor: 'white', width: '75%', marginBottom: 30}}>
            <View style={{alignItems: 'center', marginTop: 32}}>
              <QRCode value={id} />
            </View>

            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#F5F6F8',
                  position: 'absolute',
                  zIndex: 1,
                  borderRadius: 16,
                  top: 11,
                  left: -15,
                }}
              />
              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#DEDEDE',
                  marginVertical: 30,
                  borderStyle: 'dashed',
                  alignItems: 'center',
                  flex: 1,
                }}
              />
              <View
                style={{
                  width: 32,
                  height: 32,
                  backgroundColor: '#F5F6F8',
                  position: 'absolute',
                  zIndex: 1,
                  borderRadius: 16,
                  top: 11,
                  right: -15,
                }}
              />
            </View>

            <View style={{flexDirection: 'row', padding: 30}}>
              <View style={{flex: 1}}>
                <View style={{marginBottom: 24}}>
                  <Text>Movie</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {name}
                  </Text>
                </View>

                <View style={{marginBottom: 24}}>
                  <Text>Date</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {dateBooking.split('T')[0]}
                  </Text>
                </View>

                <View>
                  <Text>Count</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {seat.length}
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={{marginBottom: 24}}>
                  <Text>Category</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {category}
                  </Text>
                </View>

                <View style={{marginBottom: 24}}>
                  <Text>Time</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {timeBooking}
                  </Text>
                </View>

                <View>
                  <Text>Seats</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    {seat}
                  </Text>
                </View>
              </View>
            </View>

            <View style={{alignItems: 'center'}}>
              <View
                style={{
                  borderWidth: 1,
                  width: '80%',
                  borderColor: '#DEDEDE',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  height: 48,
                  alignItems: 'center',
                  paddingHorizontal: 20,
                  marginBottom: 30,
                }}>
                <Text>Total</Text>
                <Text>{totalPayment}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
