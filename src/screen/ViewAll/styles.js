import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    padding: 20,
  },
  searchSort: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: '60%',
    borderRadius: 16,
    paddingLeft: 15,
  },
  buttonMonth: {
    margin: 8,
    width: 127,
    height: 40,
    borderWidth: 0.5,
    borderColor: '#5F2EEA',
    backgroundColor: '#5F2EEA',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
  },
  upcomingBorder: {
    margin: 8,
    backgroundColor: 'white',
    width: 143,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    marginTop: 40,
  },
  imgMovie: {
    width: 100,
    height: 200,
  },
  buttonDetails: {
    borderWidth: 0.5,
    borderColor: '#5F2EEA',
    width: 122,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    borderRadius: 4,
  },
});
