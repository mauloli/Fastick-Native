import React from 'react';
import {
  ScrollView,
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import {useSelector} from 'react-redux';
export default function PaymentPage(props) {
  const midtransUrl = useSelector(state => state.addUrl.data);
  console.log(midtransUrl);
  const paymentLogo = [
    {
      image: require('../../assets/gpay.png'),
    },
    {
      image: require('../../assets/visa.png'),
    },
    {
      image: require('../../assets/gopay.png'),
    },
    {
      image: require('../../assets/paypal.png'),
    },
    {
      image: require('../../assets/ovo.png'),
    },
    {
      image: require('../../assets/dana.png'),
    },
  ];
  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: midtransUrl}}
        automaticallyAdjustContentInsets={false}
      />
      <View style={{alignItems: 'center', margin: 10}}>
        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            height: 40,
            justifyContent: 'center',
            paddingHorizontal: 20,
            borderRadius: 8,
          }}
          onPress={() => props.navigation.navigate('Home')}>
          <Text style={{color: 'white'}}>Back To home</Text>
        </TouchableOpacity>
      </View>
    </View>

    // <ScrollView>
    //   <View
    //     style={{
    //       backgroundColor: 'white',
    //       borderBottomEndRadius: 20,
    //       borderBottomStartRadius: 20,
    //       padding: 20,
    //       paddingTop: 30,
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //     }}>
    //     <Text style={{fontSize: 16}}>Total Payment</Text>
    //     <Text style={{fontSize: 20, color: 'black', fontWeight: '600'}}>
    //       $30.00
    //     </Text>
    //   </View>

    //   <View style={{marginHorizontal: 20, marginTop: 40, marginBottom: 16}}>
    //     <Text style={{fontSize: 18, color: 'black'}}>Payment Method</Text>
    //   </View>

    //   <View style={{alignItems: 'center'}}>
    //     <View
    //       style={{
    //         backgroundColor: 'white',
    //         width: '90%',
    //         height: 250,
    //         padding: 20,
    //         borderRadius: 16,
    //       }}>
    //       <View
    //         style={{
    //           flexDirection: 'row',
    //           flexWrap: 'wrap',
    //           justifyContent: 'center',
    //           marginBottom: 24,
    //         }}>
    //         {paymentLogo.map((item, index) => (
    //           <View
    //             key={index}
    //             style={{
    //               borderWidth: 1,
    //               width: 80,
    //               height: 32,
    //               borderRadius: 8,
    //               alignItems: 'center',
    //               justifyContent: 'center',
    //               margin: 8,
    //             }}>
    //             <Image
    //               source={item.image}
    //               style={{width: 50, height: 25}}
    //               resizeMode="contain"
    //             />
    //           </View>
    //         ))}
    //       </View>

    //       <View style={{alignItems: 'center', marginBottom: 24}}>
    //         <Text>or</Text>
    //       </View>

    //       <View style={{alignItems: 'center'}}>
    //         <Text>Pay via cash. See how it work</Text>
    //       </View>
    //     </View>
    //   </View>

    //   <View style={{margin: 20}}>
    //     <Text style={{fontSize: 18, color: 'black'}}>Personal Info</Text>
    //   </View>

    //   <View style={{alignItems: 'center'}}>
    //     <View
    //       style={{
    //         backgroundColor: 'white',
    //         width: '90%',
    //         padding: 30,
    //         marginBottom: 30,
    //         borderRadius: 16,
    //       }}>
    //       <Text style={{marginBottom: 8}}>Full Name</Text>
    //       <TextInput
    //         style={{
    //           borderWidth: 1,
    //           borderColor: '#DEDEDE',
    //           borderRadius: 12,
    //           marginBottom: 24,
    //         }}
    //         placeholder="Enter Your Name"
    //         importantForAutofill="yes"
    //       />

    //       <Text style={{marginBottom: 8}}>Email</Text>
    //       <TextInput
    //         style={{
    //           borderWidth: 1,
    //           borderColor: '#DEDEDE',
    //           borderRadius: 12,
    //           marginBottom: 24,
    //         }}
    //         placeholder="Enter Your Email"
    //       />

    //       <Text style={{marginBottom: 8}}>Phone Number</Text>
    //       <TextInput
    //         style={{
    //           borderWidth: 1,
    //           borderColor: '#DEDEDE',
    //           borderRadius: 12,
    //         }}
    //         placeholder="Enter Your Phone Number"
    //       />
    //     </View>
    //   </View>

    //   <View style={{alignItems: 'center', marginBottom: 30}}>
    //     <TouchableOpacity
    //       style={{
    //         backgroundColor: '#5F2EEA',
    //         width: 320,
    //         height: 50,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //         borderRadius: 16,
    //       }}>
    //       <Text style={{color: 'white'}}>Pay your order</Text>
    //     </TouchableOpacity>
    //   </View>
    // </ScrollView>
  );
}
