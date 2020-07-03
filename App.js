/**
 * - You can be using firebase console admin or https://pushtry.com/ to test push notification.
 * - If you want active multi-sound for notifying. You need copy file audio to notify you to want (notification1,2,3,4) 
 * to res/raw (Android), App/Resources (IOS).
 * + About IOS: You just need push name sound right like in res/raw (Android), App/Resources (IOS)
 *        {"aps":{"alert":"Enter your message","badge":1,"sound":"notification1.mp3"}}
 * + About Android: You need to create all channel have contained all sound user want. After server will push notify have contained the sound name to app
 * then app will active.
 *      {"to":"[add your token]","notification":{"sound": "notification1.mp3", "title":"Working Good","body":"[add your message]"},"priority":"high"}
 */
import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {fcmService} from './src/FCMService'
// import {SOUNDSTRING, CHANNELNOTIFY} from "./src/sounds";

export default class App extends Component {
  constructor(props) {
    super(props)
    // this.isCreateAllChannel = false // (need for choose multi sound notify Android)
  }

  componentDidMount() {
    fcmService.register(this.onRegister, this.onNotification, 
    this.onOpenNotification)
  }

  onRegister(token) {
    console.log("[NotificationFCM] onRegister: ", token)
    // this.createAllChannel(); // (need for choose multi sound notify Android)
  }

  onNotification(notify) {
    console.log("[NotificationFCM] onNotification: ", notify)
    // For Android
    const channelObj = {
      channelId: "SampleChannelID",
      channelName: "SampleChannelName",
      channelDes: "SampleChannelDes"
    }
    const channel = fcmService.buildChannel(channelObj)
    fcmService.createChannel(channel)

    const buildNotify = {
      dataId: notify._notificationId,
      title: notify._title,
      content: notify._body,
      sound: 'default', // You can add sound you want.
      channel: channel,
      data: {},
      colorBgIcon: "#1A243B",
      largeIcon: 'ic_launcher',
      smallIcon: 'ic_launcher',
      vibrate: true
    }

    const notification = fcmService.buildNotification(buildNotify)
    fcmService.displayNotification(notification)

  }

  onOpenNotification(notify) {
    console.log("[NotificationFCM] onOpenNotification: ", notify)
    alert("Open Notification: " + notify._body)
  }

  /**
     * Create all channel need for push notification sound in background
     * NOTIFICATION_SYSTEM, NOTIFICATION_1, NOTIFICATION_2, NOTIFICATION_3, NOTIFICATION_4 is sound user have change when receive notify
     *
     */
    // createAllChannel = () => {
    //   if (this.isCreateAllChannel) {
    //       this.isCreateAllChannel = false
    //       this.createChannel(CHANNELNOTIFY.NOTIFICATION_SYSTEM, SOUNDSTRING.NOTIFICATION_SYSTEM)
    //       this.createChannel(CHANNELNOTIFY.NOTIFICATION_1, SOUNDSTRING.NOTIFICATION_1)
    //       this.createChannel(CHANNELNOTIFY.NOTIFICATION_2, SOUNDSTRING.NOTIFICATION_2)
    //       this.createChannel(CHANNELNOTIFY.NOTIFICATION_3, SOUNDSTRING.NOTIFICATION_3)
    //       this.createChannel(CHANNELNOTIFY.NOTIFICATION_4, SOUNDSTRING.NOTIFICATION_4)
    //   }
  // }

  render () {
    let {container} = styles
    return (
      <View style={container}>
        <Text>Sample React Native Firebase</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})