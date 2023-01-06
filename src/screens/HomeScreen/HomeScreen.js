import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import {styles} from './style';
import Modal from 'react-native-modal';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../Colors';
import {useNetInfo} from '@react-native-community/netinfo';
import {NetInfoBage} from '../../components/NetInfoBage';
import {readJson, writeJson} from '../../utils/jsonEditor';
import {ShowErrorOnPress} from '../../utils/ShowMessages';

export const HomeScreen = ({route}) => {
  const [posts, setPosts] = useState({});
  const [postsLoading, setPostsLoading] = useState(true);
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNotInternet, setIsNotInternet] = useState(true);

  const {toAuthorize} = route.params;
  const netInfo = useNetInfo();

  let commentsId = 0;

  const fetchPosts = () => {
    setPostsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        writeJson(JSON.stringify(res.data));
      })
      .catch(e => {
        ShowErrorOnPress(fetchPosts);
      })
      .finally(() => {
        setPostsLoading(false);
      });
  };

  const fetchComments = () => {
    setCommentsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=' + commentsId)
      .then(res => {
        setComments(res.data);
      })
      .catch(() => {
        setModalVisible(false);
        ShowErrorOnPress(fetchComments);
      })
      .finally(() => {
        setCommentsLoading(false);
      });
  };

  const renderModal = id => {
    commentsId = id;
    setModalVisible(true);
    fetchComments();
  };

  const renderPostItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        renderModal(item.id);
      }}>
      <View style={styles.postsContainer}>
        <Text style={styles.TitleText}>{item.title}</Text>
        <Text style={styles.BodyText}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderCommentItem = ({item}) => (
    <View style={styles.postsContainer}>
      <Text style={styles.TitleText}>{item.name}</Text>
      <Text style={styles.BodyText}>{item.body}</Text>
    </View>
  );

  useEffect(() => {
    fetchPosts();
    if (netInfo.isConnected) {
      setIsNotInternet(false);
    } else {
      readJson({setPosts, isNotInternet});
    }
  }, [netInfo.isConnected]);

  return (
    <LinearGradient colors={Colors.BodyLinearGradient} style={styles.container}>
      {isNotInternet && <NetInfoBage />}
      <LinearGradient
        colors={Colors.HeaderLinearGradient}
        style={[styles.header, isNotInternet && {top: 25}]}>
        <Text style={styles.logo}>SHEVA</Text>
        <TouchableOpacity onPress={toAuthorize}>
          <Image
            style={styles.icon}
            source={require('../../icons/logout.png')}
          />
        </TouchableOpacity>
      </LinearGradient>
      {postsLoading ? (
        <ActivityIndicator size="large" color="#FFF" />
      ) : (
        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{marginTop: 70}}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{height: 600}}
          data={posts}
          renderItem={renderPostItem}
          keyExtractor={item => item.id}
        />
      )}
      <Modal
        animationType="fade"
        transparent={true}
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredViewForModal}>
          <LinearGradient
            colors={Colors.BodyLinearGradient}
            style={styles.modalView}>
            {commentsLoading ? (
              <ActivityIndicator size="large" color="#FFF" />
            ) : (
              <FlatList
                ListFooterComponent={<View />}
                ListFooterComponentStyle={{height: 100}}
                showsVerticalScrollIndicator={false}
                data={comments}
                renderItem={renderCommentItem}
                keyExtractor={item => item.id}
              />
            )}
          </LinearGradient>
        </View>
      </Modal>
    </LinearGradient>
  );
};
