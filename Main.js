import React from 'react';
import { AlertIOS, Button, View, Text, StyleSheet } from 'react-native';

import { acBackend } from './Env';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roomData: {}, data: {} };
  }

  componentDidMount() {
    this.send('curtemp').then(roomData => this.setState({ roomData }));
    this.send('status').then(data => this.setState({ data }));
  }

  renderData() {
    const { data, roomData } = this.state;
    console.log('roomData', roomData);
    console.log('data', data);
    return (
      <View>
        <Text>Room Temp: { roomData.temperature }</Text>
        <Text>Room Humidity: { roomData.humidity }</Text>
        <Text>Mode: { data.mode }</Text>
        <Text>Temperature: { data.temperature }</Text>
        <Text>Swing: { data.swing }</Text>
        <Text>Fan: { data.fanSpeed }</Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderData()}
        <Button
          title="Turn ON"
          onPress={this.handleCommand('turnon')}
          color="#841584"
        />
        <Button
          title="Turn OFF"
          onPress={this.handleCommand('turnon')}
          color="#841584"
        />
        <Button
          title="+"
          onPress={this.handleCommand('inctemp')}
          color="#841584"
        />
        <Button
          title="-"
          onPress={this.handleCommand('dectemp')}
          color="#841584"
        />
        <Button
          title="Fan"
          onPress={this.handleCommand('nextfan')}
          color="#841584"
        />
      </View>
    )
  }

  handleCommand(command) {
    return ((event) => {
      this.send('curtemp').then(roomData => this.setState({ roomData }));
      this.send(command).then(data => this.setState({ data }));
    }).bind(this);
  }

  send(command) {
    console.log('acBackend', acBackend);
    return fetch(`${acBackend}/${command}`).then(res => res.json());
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC',
  }
});
