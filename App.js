import React, {Component} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import {fcmService} from './src/FCMService'

export default class App extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    fcmService.register(this.onRegister, this.onNotification, 
    this.onOpenNotification)
  }

  onRegister(token) {
    console.log("[NotificationFCM] onRegister: ", token)
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

    const buildNotify = {
      dataId: notify._notificationId,
      title: notify._title,
      content: notify._body,
      sound: 'default',
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