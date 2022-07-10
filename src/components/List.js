import React, {useEffect, useState} from 'react';
import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';

const List = ({navigation}) => {
  const [todos, setTodos] = useState([]);
  const fetchTodos = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
    const data = await response.json();
    if (response.ok) {
      setTodos(data);
    }
  };
  const {listTiles, container, textStyle} = styles;

  useEffect(() => {
    fetchTodos();
  }, []);

  const navigateToList = item => {
    navigation.navigate('Details', item);
  };
  return (
    <View style={container}>
      <FlatList
        data={todos}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigateToList(item)}
            key={item.id}
            style={listTiles}>
            <Text style={textStyle}>{item.title}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTiles: {
    backgroundColor: 'white',
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  textStyle: {
    color: 'green',
    fontSize: 16,
  },
});

export default List;
