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
import {Colors} from '../Colors';
import Snackbar from 'react-native-snackbar';
import {useNetInfo} from '@react-native-community/netinfo';
import {NetInfoBage} from '../../components/netInfoBage';
import {readJson, writeJson} from '../../utils/jsonEditor';

export const HomeScreen = ({route}) => {
  const [posts, setPosts] = useState({});
  const [postsLoading, setPostsLoading] = useState(true);
  const [comments, setComments] = useState({});
  const [commentsLoading, setCommentsLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [isNotInternet, setisNotInterner] = useState(true);

  const {toAuthorize} = route.params;
  const netInfo = useNetInfo();

  const toShowFetchPostError = () => {
    Snackbar.show({
      text: 'An error occurred',
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'Repeat the request',
        textColor: 'green',
        onPress: () => {
          fetchPosts();
        },
      },
    });
  };

  const toShowFetchCommentsErrorById = id => {
    Snackbar.show({
      text: 'An error occurred',
      duration: Snackbar.LENGTH_INDEFINITE,
      action: {
        text: 'Repeat the request',
        textColor: 'green',
        onPress: () => {
          fetchCommentsById(id);
        },
      },
    });
  };

  const fetchPosts = () => {
    setPostsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        setPosts(res.data);
        writeJson(JSON.stringify(res.data));
      })
      .catch(e => {
        toShowFetchPostError();
      })
      .finally(() => {
        setPostsLoading(false);
      });
  };

  const fetchCommentsById = id => {
    setCommentsLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      .then(res => {
        setComments(res.data);
      })
      .catch(() => {
        setModalVisible(false);
        toShowFetchCommentsErrorById(id);
      })
      .finally(() => {
        setCommentsLoading(false);
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
      setisNotInterner(false);
      readJson({setPosts, isNotInternet});
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
