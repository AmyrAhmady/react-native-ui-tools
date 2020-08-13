/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React, { Component } from 'react';
import { Modal, StyleSheet, View, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';

export default class Popup extends Component {

  static defaultProps = {
    title: "Title",
    content: "Text",
    closeButtonText: 'Close',
    visible: false,
    backgroundOpacity: 0,
    headerComponent: null,
    contentComponent: null,
    footerComponent: null,
    titleTextStyle: {},
    titleContainerStyle: {},
    contentTextStyle: {},
    contentContainerStyle: {},
    containerStyle: {}
  }

  constructor(props) {
    super(props);
    this.state = {
      visible: false
    }
  }

  componentDidMount() {
    this.setState({ visible: this.props.visible })
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.visible !== this.props.visible)
      this.setState({ visible: this.props.visible });
  }

  onRequestClose() {
    let result = true;
    if (this.props.onClose)
      result = this.props.onClose();
    if (result)
      this.setState({ visible: false })
  }

  onCloseButtonClick() {
    let result = true;
    if (this.props.onClose)
      result = this.props.onClose();
    if (result)
      this.setState({ visible: false })
  }

  show() {
    this.setState({ visible: true })
  }

  render() {

    const {
      title,
      content,
      visible,
      backgroundOpacity,
      headerComponent,
      contentComponent,
      footerComponent,
      titleTextStyle,
      titleContainerStyle,
      contentTextStyle,
      contentContainerStyle,
      containerStyle,
      style,
      ...others
    } = this.props;

    return (
      <Modal
        style={[styles.modalStyle, this.props.style]}
        visible={this.state.visible}
        onRequestClose={() => this.onRequestClose()}
        transparent={true}
        animationType='slide'
        {...others}
      >
        <View style={styles.backgroundStyle}>
          <TouchableWithoutFeedback
            style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}
            onPress={() => this.onRequestClose()}
          >
            <View style={{ backgroundColor: 'black', position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }} opacity={backgroundOpacity ? backgroundOpacity : 0.5} />
          </TouchableWithoutFeedback>
          <View style={[styles.container, this.props.containerStyle]}>
            {(headerComponent == null) ? (
              <View style={[styles.titleStyle, this.props.titleContainerStyle]}>
                <Text style={[styles.titleTextStyle, this.props.titleTextStyle]}>{this.props.title}</Text>
              </View>
            ) : (
                this.props.headerComponent
              )}

            {(contentComponent == null) ? (
              <ScrollView style={[styles.contentStyle, this.props.contentContainerStyle]}>
                <Text style={[styles.contentTextStyle, this.props.contentTextStyle]}>{this.props.content}</Text>
              </ScrollView>
            ) : (
                this.props.contentComponent
              )}

            {(footerComponent == null) ? (
              <View style={styles.defaultFooterStyle}>
                <TouchableOpacity
                  style={{ padding: '5%' }}
                  onPress={() => this.onCloseButtonClick()}
                >
                  <Text style={[styles.closeButton, this.props.closeButtonStyle]}>{this.props.closeButtonText}</Text>
                </TouchableOpacity>
              </View>

            ) : (
                this.props.footerComponent
              )}

          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalStyle: {
    overflow: 'hidden'
  },
  container: {
    height: '60%',
    width: '85%',
    backgroundColor: '#fff',
    flexDirection: 'column',
    elevation: 10,
    borderRadius: 20,
    overflow: 'hidden'
  },
  titleStyle: {
    width: '100%',
    paddingVertical: '5%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  titleTextStyle: {
    textAlign: 'center',
    fontWeight: 'bold'
  },
  contentStyle: {
    flex: 1,
    width: '100%',
    paddingVertical: '5%',
    paddingHorizontal: '4%',
    marginTop: 0
  },
  contentTextStyle: {
    textAlign: 'center'
  },
  closeButton: {
    textAlign: 'center'
  },
  defaultFooterStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundStyle: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});