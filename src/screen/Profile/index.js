import React, {useEffect, useState} from 'react';
import axios from '../../utils/axios';
import {
  View,
  ScrollView,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';
import Footer from '../../components/Footer';
import {
  TabView,
  SceneMap,
  TabBar,
  TabBarIndicator,
} from 'react-native-tab-view';
import {
  useDisclose,
  Pressable,
  Modal,
  FormControl,
  Input,
  Button,
  Center,
} from 'native-base';
import QRCode from 'react-native-qrcode-svg';
import {getUserById} from '../../stores/actions/profile';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Animated from 'react-native-reanimated';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePage(props) {
  const dispatch = useDispatch();
  const cloduinaryImage =
    'https://res.cloudinary.com/dfoi1ro2a/image/upload/v1649233762/';
  const {isOpen, onOpen, onClose} = useDisclose();

  const [showModal, setShowModal] = useState(false);
  const userLogin = useSelector(state => state.profile.data);
  const {FirstName, lastName, image, noTelp} = userLogin;

  const getDataUser = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      console.log(id);
      await dispatch(getUserById(id));
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };

  const handleImage = async res => {
    const newImage = new FormData();
    newImage.append('image', {
      name: res.fileName,
      type: res.type,
      uri: res.uri,
    });
  };

  const hanldeGallery = async () => {
    await launchImageLibrary(
      {mediaType: 'photo', maxHeight: 512, maxWidth: 512},
      res => handleImage(res.assets[0]),
    );
    setShowModal(false);
  };
  const handleCamera = () => {
    launchCamera({mediaType: 'photo', maxHeight: 512, maxWidth: 512}, res =>
      console.log(res.assets[0]),
    );
  };

  const handleLogout = async () => {
    try {
      alert('Logout');
      await AsyncStorage.clear();
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
      });
    } catch (error) {}
  };
  // ------------------------First Route------------------------------------------

  const FirstRoute = () => {
    const [form, setForm] = useState({
      fullName: '',
      email: '',
      noTelp: '',
    });

    const [formPassword, setFormPassword] = useState({
      newPassword: '',
      confirmPassword: '',
    });

    const handleChange = (text, name) => {
      setForm({...form, [name]: text});
    };

    const handleChangePassword = (text, name) => {
      setFormPassword({...formPassword, [name]: text});
    };

    const updaetChangeProfile = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        const setData = {
          firstName: form.fullName.split(' ')[0],
          lastName: form.fullName.split(' ')[1],
          noTelp: form.noTelp,
        };
        console.log(setData);
        const result = await axios.patch(`user/${id}`, setData);
        console.log(result.data.data);
        setForm({...form, fullName: '', email: '', noTelp: ''});
        alert(result.data.msg);

        getDataUser();
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

    const updateChangePassword = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        const result = await axios.patch(`user/password/${id}`, formPassword);
        console.log(result.data.data);
        setFormPassword({...form, newPassword: '', confirmPassword: ''});
        alert(result.data.msg);
      } catch (error) {
        alert(error.response.data.msg);
      }
    };

    console.log(formPassword);
    return (
      <ScrollView style={{flex: 1}}>
        <View
          style={{
            borderWidth: 1,
            position: 'absolute',
            width: 200,
            top: 0,
            zIndex: 1,
          }}
        />
        <View style={{alignItems: 'center', marginBottom: 32}}>
          <View
            style={{
              width: '90%',
              backgroundColor: 'white',
              borderRadius: 24,
              height: 478,
              padding: 40,
              marginTop: 32,
            }}>
            <Text style={{fontSize: 16}}>INFO</Text>
            <View style={{marginTop: 32, alignItems: 'center'}}>
              <Pressable onPress={() => setShowModal(true)}>
                <Image
                  style={{width: 136, height: 136, marginBottom: 32}}
                  source={
                    image.length === 0
                      ? require('../../assets/user1.png')
                      : {uri: cloduinaryImage + image}
                  }
                />
              </Pressable>

              <Center>
                <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
                  <Modal.Content maxWidth="400px" height="200px">
                    <Modal.CloseButton />
                    <Modal.Header>Select Photo</Modal.Header>
                    <Modal.Body>
                      <TouchableOpacity
                        onPress={hanldeGallery}
                        style={{alignItems: 'center', height: 30}}>
                        <Text>Choose from galery</Text>
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{alignItems: 'center', height: 30}}
                        onPress={handleCamera}>
                        <Text>Camera</Text>
                      </TouchableOpacity>
                    </Modal.Body>
                  </Modal.Content>
                </Modal>
              </Center>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: '600',
                  color: 'black',
                  marginBottom: 4,
                }}>
                {`${FirstName} ${lastName}`}
              </Text>
              <Text>Moviegoers</Text>
              <TouchableOpacity
                style={{
                  width: 187,
                  height: 50,
                  backgroundColor: '#5F2EEA',
                  borderRadius: 16,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 60,
                }}
                onPress={handleLogout}>
                <Text style={{color: 'white'}}>Logout</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={{margin: 25}}>
          <Text>Account Setting</Text>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              height: 470,
              marginBottom: 30,
              borderRadius: 16,
              padding: 24,
            }}>
            <View style={{marginTop: 40}}>
              <Text>Details Information</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#DEDEDE',
                marginBottom: 48,
              }}
            />

            <View>
              <Text>Full Name</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 12,
                  marginTop: 12,
                  paddingLeft: 20,
                  marginBottom: 25,
                }}
                placeholder="input name"
                onChangeText={text => handleChange(text, 'fullName')}
                value={form.fullName}
              />
            </View>

            <View>
              <Text>Email</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 12,
                  marginTop: 12,
                  paddingLeft: 20,
                  marginBottom: 25,
                }}
                placeholder="input email"
                onChangeText={text => handleChange(text, 'email')}
                value={form.email}
              />
            </View>

            <View>
              <Text>Phone Number</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 12,
                  marginTop: 12,
                  paddingLeft: 20,
                  marginBottom: 25,
                }}
                placeholder="input Phone number"
                onChangeText={text => handleChange(text, 'noTelp')}
                value={form.noTelp}
              />
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center', marginBottom: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5F2EEA',
              width: '70%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
            onPress={updaetChangeProfile}>
            <Text style={{color: 'white'}}>Update Change</Text>
          </TouchableOpacity>
        </View>

        <View style={{alignItems: 'center'}}>
          <View
            style={{
              backgroundColor: 'white',
              width: '90%',
              marginBottom: 30,
              borderRadius: 16,
              padding: 24,
            }}>
            <View style={{marginTop: 40}}>
              <Text>Account and Privacy</Text>
            </View>
            <View
              style={{
                borderBottomWidth: 1,
                borderColor: '#DEDEDE',
                marginBottom: 48,
              }}
            />

            <View>
              <Text>New Password</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 12,
                  marginTop: 12,
                  paddingLeft: 20,
                  marginBottom: 25,
                }}
                placeholder="input password"
                onChangeText={text => handleChangePassword(text, 'newPassword')}
                secureTextEntry
                value={formPassword.newPassword}
              />
            </View>

            <View>
              <Text>Confirm</Text>
              <TextInput
                style={{
                  borderWidth: 1,
                  borderColor: '#DEDEDE',
                  borderRadius: 12,
                  marginTop: 12,
                  paddingLeft: 20,
                  marginBottom: 25,
                }}
                secureTextEntry
                placeholder="confirm password"
                onChangeText={text =>
                  handleChangePassword(text, 'confirmPassword')
                }
                value={formPassword.confirmPassword}
              />
            </View>
          </View>
        </View>
        <View style={{alignItems: 'center', marginBottom: 30}}>
          <TouchableOpacity
            style={{
              backgroundColor: '#5F2EEA',
              width: '70%',
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 8,
            }}
            onPress={updateChangePassword}>
            <Text style={{color: 'white'}}>Update Change</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Footer />
        </View>
      </ScrollView>
    );
  };
  // ------------------------Second Route------------------------------------------
  const SecondRoute = () => {
    const [dataBooking, setDataBooking] = useState([]);
    const date = new Date('2022-04-27T00:00:00.000Z');
    console.log(date);
    const getHistory = async () => {
      try {
        const id = await AsyncStorage.getItem('userId');
        const result = await axios.get(`booking/user/${id}`);
        console.log(result.data.data.reverse());
        setDataBooking(result.data.data);
      } catch (error) {
        console.log(error.response.data.msg);
      }
    };

    useEffect(() => {
      getHistory();
    }, []);
    console.log(dataBooking);
    return (
      <ScrollView style={{flex: 1}}>
        <View style={{marginTop: 30, alignItems: 'center'}}>
          {dataBooking.map((item, index) => (
            <View
              style={{
                backgroundColor: 'white',
                width: '90%',
                padding: 20,
                borderRadius: 16,
                marginTop: 20,
                marginBottom: 20,
              }}
              key={index}>
              <Text
                style={[
                  {
                    fontSize: 30,
                    fontFamily: 'arial',
                    fontWeight: 'bold',
                    marginBottom: 15,
                  },
                  item.premier
                    ? item.premier.includes('hiflix')
                      ? {color: 'red'}
                      : item.premier.includes('cineone')
                      ? {color: 'blue'}
                      : {color: 'black'}
                    : '',
                ]}>
                {item.premier}
              </Text>
              <Text style={{marginBottom: 4}}>
                {item.dateBooking.split('T')[0] +
                  ' - ' +
                  item.timeBooking.split(':')[0] +
                  ':' +
                  item.timeBooking.split(':')[1]}
              </Text>
              <Text style={{color: 'black', fontSize: 18}}>{item.name}</Text>

              <View
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#DEDEDE',
                  marginTop: 32,
                }}
              />

              <View
                style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
                <TouchableOpacity
                  disabled={item.statusUsed === 'notActive' ? true : false}
                  style={[
                    {
                      width: 279,
                      height: 40,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 8,
                    },
                    item.statusUsed === 'active'
                      ? {backgroundColor: '#00BA88'}
                      : {backgroundColor: '#6E7191'},
                  ]}
                  onPress={() =>
                    props.navigation.navigate('TicketResult', {data: item})
                  }>
                  <Text style={{color: 'white'}}>
                    {item.statusUsed === 'active'
                      ? 'Ticket in active'
                      : 'ticket hase used'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
        <View style={{backgroundColor: 'white'}}>
          <Footer />
        </View>
      </ScrollView>
    );
  };
  // ------------------------------------------------------------------

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Details Account'},
    {key: 'second', title: 'Order History'},
  ]);
  const _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={styles.tabItem}
              onPress={() => setIndex(i)}>
              <Animated.Text style={{color: 'black'}}>
                {route.title}
              </Animated.Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const layout = useWindowDimensions();

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      renderTabBar={_renderTabBar}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: 16,
    backgroundColor: 'white',
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
});
