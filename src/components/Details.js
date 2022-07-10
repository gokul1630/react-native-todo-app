import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Details = ({route}) => {
  const {container, textStyle} = styles;
  const {userId, title, completed} = route.params;
  return (
    <View style={container}>
      <Text style={textStyle}>UserId: {userId}</Text>
      <Text style={textStyle}>Completed: {completed}</Text>
      <Text style={textStyle}>Title: {title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: 'green',
    fontSize: 25,
  },
});

export default Details;
// const a={"navigation": {"addListener": [Function addListener], "canGoBack": [Function canGoBack], "dispatch": [Function dispatch], "getId": [Function getId], "getParent": [Function getParent], "getState": [Function anonymous], "goBack": [Function anonymous], "isFocused": [Function isFocused], "navigate": [Function anonymous], "pop": [Function anonymous], "popToTop": [Function anonymous], "push": [Function anonymous], "removeListener": [Function removeListener], "replace": [Function anonymous], "reset": [Function anonymous], "setOptions": [Function setOptions], "setParams": [Function anonymous]}, "route": {"key": "Details-kpA8UJPv6Ax84Z1UDmzGt", "name": "Details", "params": {"completed": false, "id": 2, "title": "quis ut nam facilis et officia qui", "userId": 1}, "path": undefined}}
