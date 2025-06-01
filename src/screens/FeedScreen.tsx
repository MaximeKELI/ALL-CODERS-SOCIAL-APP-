import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import { Video } from 'expo-av';

interface Post {
  id: string;
  type: 'video' | 'article';
  content: string;
  author: {
    name: string;
    avatar: string;
    title: string;
  };
  likes: number;
  comments: number;
}

const FeedScreen = () => {
  const [posts] = useState<Post[]>([
    {
      id: '1',
      type: 'video',
      content: 'https://example.com/video1.mp4',
      author: {
        name: 'John Doe',
        avatar: 'https://example.com/avatar1.jpg',
        title: 'Software Engineer',
      },
      likes: 120,
      comments: 15,
    },
    {
      id: '2',
      type: 'article',
      content: 'Just launched my new project! Check it out...',
      author: {
        name: 'Jane Smith',
        avatar: 'https://example.com/avatar2.jpg',
        title: 'Product Manager',
      },
      likes: 85,
      comments: 23,
    },
  ]);

  const renderPost = ({ item }: { item: Post }) => (
    <View style={styles.postContainer}>
      <View style={styles.authorContainer}>
        <Image
          source={{ uri: item.author.avatar }}
          style={styles.avatar}
        />
        <View style={styles.authorInfo}>
          <Text style={styles.authorName}>{item.author.name}</Text>
          <Text style={styles.authorTitle}>{item.author.title}</Text>
        </View>
      </View>

      {item.type === 'video' ? (
        <Video
          source={{ uri: item.content }}
          style={styles.video}
          useNativeControls
          resizeMode="cover"
        />
      ) : (
        <Text style={styles.articleContent}>{item.content}</Text>
      )}

      <View style={styles.actionsContainer}>
        <TouchableOpacity style={styles.actionButton}>
          <Text>❤️ {item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>💬 {item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Text>↗️ Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  authorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  authorInfo: {
    marginLeft: 12,
  },
  authorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  authorTitle: {
    fontSize: 14,
    color: '#666',
  },
  video: {
    width: Dimensions.get('window').width - 32,
    height: 300,
    borderRadius: 8,
  },
  articleContent: {
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 12,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  actionButton: {
    padding: 8,
  },
});

export default FeedScreen; 