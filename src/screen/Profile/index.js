import React, {useState} from 'react';
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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import Animated from 'react-native-reanimated';
import {useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ProfilePage(props) {
  const cloduinaryImage =
    'https://res.cloudinary.com/dfoi1ro2a/image/upload/v1649233762/';
  const {isOpen, onOpen, onClose} = useDisclose();
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    noTelp: '',
  });
  const [showModal, setShowModal] = useState(false);
  const userLogin = useSelector(state => state.profile.data);
  const {FirstName, lastName, image, noTelp} = userLogin;

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

  const handleChange = (text, name) => {
    setForm({...form, [name]: text});
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
  console.log(form);
  const FirstRoute = () => (
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
          }}>
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
              placeholder="input name"
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
              placeholder="input email"
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
          }}>
          <Text style={{color: 'white'}}>Update Change</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
  // ------------------------Second Route------------------------------------------
  const SecondRoute = () => (
    <ScrollView style={{flex: 1}}>
      <View style={{marginTop: 30, alignItems: 'center'}}>
        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            padding: 20,
            borderRadius: 16,
          }}>
          <Text
            style={{
              color: '#394BA7',
              fontSize: 20,
              fontFamily: 'arial',
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            CineOne21
          </Text>
          <Text style={{marginBottom: 4}}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Spider-Man: Homecoming
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#DEDEDE',
              marginTop: 32,
            }}
          />

          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#00BA88',
                width: 279,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}
              onPress={() => props.navigation.navigate('TicketResult')}>
              <Text style={{color: 'white'}}>Ticket in active</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            width: '90%',
            padding: 20,
            marginVertical: 30,
            borderRadius: 16,
          }}>
          <Text
            style={{
              color: '#394BA7',
              fontSize: 20,
              fontFamily: 'arial',
              fontWeight: 'bold',
              marginBottom: 15,
            }}>
            CineOne21
          </Text>
          <Text style={{marginBottom: 4}}>Tuesday, 07 July 2020 - 04:30pm</Text>
          <Text style={{color: 'black', fontSize: 18}}>
            Spider-Man: Homecoming
          </Text>

          <View
            style={{
              borderBottomWidth: 1,
              borderColor: '#DEDEDE',
              marginTop: 32,
            }}
          />

          <View style={{alignItems: 'center', marginTop: 20, marginBottom: 10}}>
            <TouchableOpacity
              style={{
                backgroundColor: '#6E7191',
                width: 279,
                height: 40,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 8,
              }}>
              <Text style={{color: 'white'}}>Ticket in active</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
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
