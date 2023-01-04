import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {styles} from './style';
import Modal from 'react-native-modal';

export const HomeScreen = ({route}) => {
  const [posts, setPosts] = useState({});
  const [comments, setComments] = useState({});
  const [modalVisible, setModalVisible] = useState(false);

  const {toAuthorize} = route.params;

  const fetchCommentsById = id => {
    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .then(res => {
        setComments(res.data);
      });
  };

  const renderModal = id => {
    setModalVisible(true);
    fetchCommentsById(id);
  };

  const renderPostItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        renderModal(item.id);
      }}>
      <View style={styles.postsContainer}>
        <Text style={{padding: 5}}>title: {item.title}</Text>
        <Text style={{padding: 5}}>body: {item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCommentItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        renderModal(item.id);
      }}>
      <View style={styles.postsContainer}>
        <Text style={{padding: 5}}>name: {item.name}</Text>
        <Text style={{padding: 5}}>body: {item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then(res => {
      setPosts(res.data);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logo}>SHEVA</Text>
        <TouchableOpacity onPress={toAuthorize}>
          <Image
            style={styles.icon}
            source={require('../../icons/logout.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: 70}}
        data={posts}
        renderItem={renderPostItem}
        keyExtractor={item => item.id}
      />
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <FlatList
              data={comments}
              renderItem={renderCommentItem}
              keyExtractor={item => item.id}
            />
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};
