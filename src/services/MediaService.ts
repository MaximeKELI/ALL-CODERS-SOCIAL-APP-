import storage from '@react-native-firebase/storage';
import { Platform } from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Camera } from 'react-native-camera';

interface MediaOptions {
  mediaType: 'photo' | 'video';
  quality?: number;
  durationLimit?: number;
}

class MediaService {
  async uploadMedia(uri: string, path: string): Promise<string> {
    try {
      const reference = storage().ref(path);
      await reference.putFile(uri);
      return await reference.getDownloadURL();
    } catch (error) {
      console.error('Upload Error:', error);
      throw error;
    }
  }

  async captureMedia(options: MediaOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      launchCamera(
        {
          mediaType: options.mediaType,
          quality: options.quality || 1,
          durationLimit: options.durationLimit,
          saveToPhotos: true,
        },
        (response) => {
          if (response.didCancel) {
            reject(new Error('User cancelled media capture'));
          } else if (response.errorCode) {
            reject(new Error(response.errorMessage));
          } else if (response.assets && response.assets[0].uri) {
            resolve(response.assets[0].uri);
          }
        }
      );
    });
  }

  async pickMedia(options: MediaOptions): Promise<string> {
    return new Promise((resolve, reject) => {
      launchImageLibrary(
        {
          mediaType: options.mediaType,
          quality: options.quality || 1,
          durationLimit: options.durationLimit,
        },
        (response) => {
          if (response.didCancel) {
            reject(new Error('User cancelled media picker'));
          } else if (response.errorCode) {
            reject(new Error(response.errorMessage));
          } else if (response.assets && response.assets[0].uri) {
            resolve(response.assets[0].uri);
          }
        }
      );
    });
  }

  async uploadProfilePicture(uri: string, userId: string): Promise<string> {
    const path = `users/${userId}/profile_picture.jpg`;
    return this.uploadMedia(uri, path);
  }

  async uploadPostMedia(uri: string, userId: string, postId: string, type: 'photo' | 'video'): Promise<string> {
    const extension = type === 'photo' ? 'jpg' : 'mp4';
    const path = `posts/${userId}/${postId}.${extension}`;
    return this.uploadMedia(uri, path);
  }

  async deleteMedia(path: string): Promise<void> {
    try {
      await storage().ref(path).delete();
    } catch (error) {
      console.error('Delete Error:', error);
      throw error;
    }
  }

  getMediaUrl(path: string): Promise<string> {
    return storage().ref(path).getDownloadURL();
  }
}

export default new MediaService(); 