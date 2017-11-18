import React from 'react';
import { StyleSheet, NavigatorIOS, Text } from 'react-native';

import Main from './Main';

export default class App extends React.Component {
  render() {
    return (
      <NavigatorIOS
        initialRoute={{
          component: Main,
          title: 'Coury Home Automation',
        }}
        style={styles.container}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  },
});
