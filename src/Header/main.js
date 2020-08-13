/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React, { Component } from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    leftComponent: (<View />),
    leftContainerStyle: {},
    centerComponent: (<View />),
    centerContainerStyle: {},
    rightComponent: (<View />),
    rightContainerStyle: {},
    style: {}
  };

  render() {
    return (
      <View>
        <View style={[styles.container, this.props.style]}>
          <View style={[styles.side, this.props.leftContainerStyle]}>
            {this.props.leftComponent}
          </View>
          <View style={[styles.center, this.props.centerContainerStyle]}>
            {this.props.centerComponent}
          </View>
          <View style={[styles.side, this.props.rightContainerStyle]}>
            {this.props.rightComponent}
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height:
      Platform.select({
        android: 56,
        default: 44,
      })
  },
  center: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  side: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});