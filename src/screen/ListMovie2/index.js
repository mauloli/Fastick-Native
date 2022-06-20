import {View, Text, StyleSheet} from 'react-native';
import React, {useState, useEffect} from 'react';
import axios from '../../utils/axios';
export default function ListMovie(props) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(10);

  useEffect(() => {
    getDataMovie();
  }, []);

  const getDataMovie = async () => {
    try {
      const result = await axios.get(`movie?page=${page}&limit=8`);
      console.log(result.data.data);
    } catch (error) {
      console.log(error.response.data.msg);
    }
  };
  return (
    <View>
      <Text>ListMovie</Text>
    </View>
  );
}
