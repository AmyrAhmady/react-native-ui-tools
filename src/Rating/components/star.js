/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React, { PureComponent } from 'react';
import { Animated, TouchableOpacity } from 'react-native';

const STAR_IMAGE = require('../assets/img/star.png');
const SELECTED_STAR_IMAGE = require('../assets/img/selected-star.png');

export default class Star extends PureComponent {
  static defaultProps = {
    selectedColor: '#f1c40f'
  };

  constructor() {
    super();
    this.springValue = new Animated.Value(1);

    this.state = {
      selected: false
    };
  }

  spring() {
    const { position, onStarSelected } = this.props;

    this.springValue.setValue(1.2);

    Animated.spring(
      this.springValue,
      {
        toValue: 1,
        friction: 2,
        tension: 1
      }
    ).start();

    this.setState({ selected: !this.state.selected });
    onStarSelected(position);
  }

  render() {
    const { fill, size, selectedColor, isDisabled, starStyle } = this.props;
    const starImageSource = fill ? SELECTED_STAR_IMAGE : STAR_IMAGE;

    return (
      <TouchableOpacity activeOpacity={1} onPress={this.spring.bind(this)} disabled={isDisabled}>
        <Animated.Image
          source={starImageSource}
          style={[
            {
              margin: 3,
              tintColor: selectedColor ? selectedColor : '#ED8A19',
              width: size || 40,
              height: size || 40,
              transform: [{ scale: this.springValue }]
            },
            starStyle
          ]}
        />
      </TouchableOpacity>
    );
  }
}