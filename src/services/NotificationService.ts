import PushNotification from 'react-native-push-notification';
import PushNotificationIOS from '@react-native-community/push-notification-ios';
import { Platform } from 'react-native';

class NotificationService {
  constructor() {
    this.configurePushNotifications();
  }

  configurePushNotifications() {
    PushNotification.configure({
      onRegister: function (token) {
        console.log('TOKEN:', token);
      },

      onNotification: function (notification) {
        console.log('NOTIFICATION:', notification);
        notification.finish();
      },

      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },

      popInitialNotification: true,
      requestPermissions: true,
    });

    PushNotification.createChannel(
      {
        channelId: 'messages',
        channelName: 'Messages Channel',
        channelDescription: 'Channel for message notifications',
        playSound: true,
        soundName: 'default',
        importance: 4,
        vibrate: true,
      },
      (created) => console.log(`Channel created: ${created}`)
    );
  }

  showNotification(title: string, message: string, data: any = {}) {
    if (Platform.OS === 'ios') {
      PushNotificationIOS.addNotificationRequest({
        id: Date.now().toString(),
        title,
        body: message,
        userInfo: data,
      });
    } else {
      PushNotification.localNotification({
        channelId: 'messages',
        title,
        message,
        data,
        playSound: true,
        soundName: 'default',
        importance: 'high',
        priority: 'high',
      });
    }
  }

  showMessageNotification(senderName: string, message: string) {
    this.showNotification(
      `New message from ${senderName}`,
      message,
      { type: 'message' }
    );
  }

  showLikeNotification(userName: string, postType: string) {
    this.showNotification(
      'New like',
      `${userName} liked your ${postType}`,
      { type: 'like' }
    );
  }

  showCommentNotification(userName: string, postType: string) {
    this.showNotification(
      'New comment',
      `${userName} commented on your ${postType}`,
      { type: 'comment' }
    );
  }

  cancelAllNotifications() {
    PushNotification.cancelAllLocalNotifications();
  }
}

export default new NotificationService(); 