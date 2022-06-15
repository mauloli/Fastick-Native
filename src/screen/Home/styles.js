import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  containerMain: {
    backgroundColor: 'white',
    padding: 20,
  },
  navContain: {
    height: 70,
  },
  mainHead: {
    marginBottom: 60,
  },
  mainImg: {
    marginBottom: 60,
  },
  // ----------------NOW SHOWING--------------------------
  nowShowing: {
    backgroundColor: '#D6D8E7',
    padding: 20,
  },
  navMovie: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  borderMovie: {
    margin: 8,
    backgroundColor: 'white',
    width: 170,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  imgMovie: {
    width: 130,
    height: 180,
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
  // ------------------------------------------
  // -------------UPCOMING-----------------------------
  upcoming: {
    backgroundColor: 'white',
    padding: 20,
  },
  upcomingNav: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    paddingHorizontal: 10,
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
    width: 170,
    height: 330,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    marginTop: 40,
  },
  // ------------------------------------------
  // --------------MOVIE GOERS----------------------------
  movieGoers: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 401,
    borderWidth: 0.5,
    paddingTop: 20,
    marginTop: 72,
  },
  elevation: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonJoin: {
    backgroundColor: '#5F2EEA',
    borderWidth: 1,
    width: '80%',
    height: 46,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
});
