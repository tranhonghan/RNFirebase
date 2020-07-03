// You need Copy file audio (alert.mp3 and notification1,2,3,4) to res/raw (Android), App/Resources (IOS)
const SOUNDSTRING = {
    NOTIFICATION_SYSTEM: 'default',
    NOTIFICATION_1: 'notification1.mp3',
    NOTIFICATION_2: 'notification2.mp3',
    NOTIFICATION_3: 'notification3.mp3',
    NOTIFICATION_4: 'notification4.mp3'
};
const CHANNELNOTIFY = {
    NOTIFICATION_SYSTEM: 'rn-push-notification-channel-id-default',
    NOTIFICATION_1: 'rn-push-notification-channel-id-notification1',
    NOTIFICATION_2: 'rn-push-notification-channel-id-notification2',
    NOTIFICATION_3: 'rn-push-notification-channel-id-notification3',
    NOTIFICATION_4: 'rn-push-notification-channel-id-notification4'
};
export {SOUND, SOUNDSTRING, CHANNELNOTIFY}