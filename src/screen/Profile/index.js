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
import Animated from 'react-native-reanimated';

const FirstRoute = () => (
  <ScrollView style={{flex: 1, marginTop: 32}}>
    <View style={{alignItems: 'center', marginBottom: 32}}>
      <View
        style={{
          width: '90%',
          backgroundColor: 'white',
          borderRadius: 24,
          height: 478,
          padding: 40,
        }}>
        <Text style={{fontSize: 16}}>INFO</Text>
        <View style={{marginTop: 32, alignItems: 'center'}}>
          <Image
            style={{width: 136, height: 136, marginBottom: 32}}
            source={require('../../assets/user1.png')}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: '600',
              color: 'black',
              marginBottom: 4,
            }}>
            Jonas El Rodriguez
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
            }}>
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
const SecondRoute = () => <View style={{flex: 1, backgroundColor: 'white'}} />;
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});
export default function ProfilePage() {
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
