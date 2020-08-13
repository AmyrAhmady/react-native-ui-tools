/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React, { Component } from 'react';
import { View, } from 'react-native';

export default class Divider extends Component {

  static defaultProps = {
    color: "black",
    width: 1,
    style: {}
  }

  constructor(props) {
    super(props);
  }


  render() {

    const {
      color,
      width,
      style,
      ...others
    } = this.props;

    return (
      <View style={[{ width: '100%', backgroundColor: this.props.color, height: this.props.width }, this.props.style]} {...others} />
    );
  }
}