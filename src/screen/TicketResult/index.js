import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {Component} from 'react';

export default function TicketResult() {
  {
    return (
      <ScrollView style={{backgroundColor: '#F5F6F8'}}>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          <View
            style={{backgroundColor: 'white', width: '75%', marginBottom: 30}}>
            <View style={{alignItems: 'center', marginTop: 32}}>
              <Image source={require('../../assets/qr.png')} />
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
                    Spiderman
                  </Text>
                </View>

                <View style={{marginBottom: 24}}>
                  <Text>Date</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    7 jul
                  </Text>
                </View>

                <View>
                  <Text>Count</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    3 pcs
                  </Text>
                </View>
              </View>
              <View style={{flex: 1}}>
                <View style={{marginBottom: 24}}>
                  <Text>Category</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    Action
                  </Text>
                </View>

                <View style={{marginBottom: 24}}>
                  <Text>Time</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    2:00 pm
                  </Text>
                </View>

                <View>
                  <Text>Seats</Text>
                  <Text
                    style={{fontSize: 14, fontWeight: '600', color: 'black'}}>
                    C4, C5, C6
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
                <Text>$30.00</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
