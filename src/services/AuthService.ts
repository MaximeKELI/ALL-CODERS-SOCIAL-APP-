import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import AsyncStorage from '@react-native-async-storage/async-storage';

export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
}

class AuthService {
  constructor() {
    GoogleSignin.configure({
      webClientId: 'YOUR_WEB_CLIENT_ID', // À remplacer par votre ID client Google
    });
  }

  async signInWithGoogle(): Promise<User> {
    try {
      const { idToken } = await GoogleSignin.signIn();
      const googleCredential = auth.GoogleAuthProvider.credential(idToken);
      const userCredential = await auth().signInWithCredential(googleCredential);
      
      const user = userCredential.user;
      await AsyncStorage.setItem('user', JSON.stringify({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      }));

      return {
        uid: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        photoURL: user.photoURL || '',
      };
    } catch (error) {
      console.error('Google Sign-In Error:', error);
      throw error;
    }
  }

  async signOut(): Promise<void> {
    try {
      await auth().signOut();
      await GoogleSignin.signOut();
      await AsyncStorage.removeItem('user');
    } catch (error) {
      console.error('Sign-Out Error:', error);
      throw error;
    }
  }

  async getCurrentUser(): Promise<User | null> {
    try {
      const userJson = await AsyncStorage.getItem('user');
      return userJson ? JSON.parse(userJson) : null;
    } catch (error) {
      console.error('Get Current User Error:', error);
      return null;
    }
  }

  onAuthStateChanged(callback: (user: User | null) => void) {
    return auth().onAuthStateChanged(async (user) => {
      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email || '',
          displayName: user.displayName || '',
          photoURL: user.photoURL || '',
        };
        callback(userData);
      } else {
        callback(null);
      }
    });
  }
}

export default new AuthService(); 