/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React, { Component } from 'react';
import { Image } from 'react-native';

export default class ProgressiveImage extends Component {

  static defaultProps = {
    errorImage: { uri: '' },
    defaultImage: { uri: '' },
    source: { uri: '' },
    style: {}
  }

  state = {
    showDefault: true,
    showError: false
  };

  render() {
    var image = this.state.showDefault ? this.props.defaultImage : (this.state.showError ? this.props.errorImage : this.props.source);
    return (
      <Image style={this.props.style}
        source={image}
        onLoadEnd={() => this.setState({ showDefault: false })}
        onError={() => this.setState({ showError: true })}
        resizeMode={this.props.resizeMode} />
    );
  }
}