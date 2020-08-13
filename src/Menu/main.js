/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import React from 'react';

import { View, Modal, Text, ScrollView, TouchableOpacity, TouchableWithoutFeedback, Platform, ViewPropTypes as RNViewPropTypes } from 'react-native';
import styles from './style';

let componentIndex = 0;

const defaultProps = {
  data: [],
  onChange: () => { },
  keyExtractor: (item) => item.id,
  labelExtractor: (item) => item.name,
  componentExtractor: (item) => item.component,
  firstTitleText: 'Tap To Open!',
  style: {},
  itemButtonStyle: {},
  itemButtonTextStyle: {},
  itemStyle: {},
  itemTextStyle: {},
  itemContainerStyle: {},
  childrenViewStyle: {},
  openButtonStyle: {},
  closeContainerStyle: {},
  closeStyle: {},
  closeTextStyle: {},
  closeText: 'Close',
  disabled: false,
  selectedKey: '',
};

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    let selectedItem = this.validateSelectedKey(props.selectedKey);

    this.state = {
      modalVisible: false,
      selected: selectedItem.name,
      closeText: props.closeText,
      changedItem: selectedItem.id,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    let newState = {};
    let doUpdate = false;
    if (prevProps.firstTitleText !== this.props.firstTitleText) {
      newState.selected = this.props.firstTitleText;
      doUpdate = true;
    }
    if (prevProps.selectedKey !== this.props.selectedKey) {
      let selectedItem = this.validateSelectedKey(this.props.selectedKey);
      newState.selected = selectedItem.name;
      newState.changedItem = selectedItem.id;
      doUpdate = true;
    }
    if (doUpdate) {
      this.setState(newState);
    }
  }

  validateSelectedKey = (key) => {
    let selectedItem = this.props.data.filter((item) => this.props.keyExtractor(item) === key);
    let selectedLabel = selectedItem.length > 0 ? this.props.labelExtractor(selectedItem[0]) : this.props.firstTitleText;
    let selectedKey = selectedItem.length > 0 ? key : undefined;
    return { name: selectedLabel, id: selectedKey }
  }

  onChange = (item) => {
    if (Platform.OS === 'android' || (Modal.propTypes !== undefined && !Modal.propTypes.onDismiss)) {
      this.props.onChange(item);
    }
    this.setState({ selected: this.props.labelExtractor(item), changedItem: item }, () => this.close());
  }

  close = () => {
    this.setState({
      modalVisible: false,
    });
  }

  open = () => {
    this.setState({
      modalVisible: true,
      changedItem: undefined,
    });
  }

  _renderMenuItem = (option, isLastItem, isFirstItem) => {
    const optionComponent = this.props.componentExtractor(option);
    const optionLabel = this.props.labelExtractor(option);
    const isSelectedItem = optionLabel === this.state.selected;

    let component = optionComponent || (
      <Text style={[styles.itemTextStyle, this.props.itemTextStyle]}>
        {optionLabel}
      </Text>
    );

    return (
      <TouchableOpacity
        key={this.props.keyExtractor(option)}
        onPress={() => this.onChange(option)}
        activeOpacity={0.2}
        importantForAccessibility={isFirstItem}
      >
        <View style={[styles.itemStyle, this.props.itemStyle, isLastItem && { borderBottomWidth: 0 }]}>
          {component}
        </View>
      </TouchableOpacity>);
  }

  _renderMenu = () => {

    let options = this.props.data.map((item, index) => {
      return this._renderMenuItem(item, index === this.props.data.length - 1, index === 0);
    });

    return (
      <TouchableWithoutFeedback key={'menuPicker' + (componentIndex++)} accessible={false} onPress={() => this.close()}>
        <View style={styles.overlayStyle}>
          <View style={[styles.itemContainerStyle, this.props.itemContainerStyle]}>
            <ScrollView keyboardShouldPersistTaps={"always"}>
              <View style={{ paddingHorizontal: 10 }}>
                {options}
              </View>
            </ScrollView>
          </View>
          <View style={[styles.closeContainerStyle, this.props.closeContainerStyle]}>
            <TouchableOpacity onPress={this.close} activeOpacity={0.2} >
              <View style={[styles.closeStyle, this.props.closeStyle]}>
                <Text style={[styles.closeTextStyle, this.props.closeTextStyle]}>{this.props.closeText}</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>);
  }

  _renderChildrenProps = () => {

    if (this.props.children) {
      return this.props.children;
    }
    return (
      <View style={[styles.itemButtonStyle, this.props.itemButtonStyle]}>
        <Text style={[styles.itemButtonTextStyle, this.props.itemButtonTextStyle]} >{this.state.selected}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={this.props.style}>
        <Modal
          transparent={true}
          ref={element => this.model = element}
          supportedOrientations={['portrait', 'landscape']}
          visible={this.state.modalVisible}
          onRequestClose={this.close}
          animationType={"slide"}
          onDismiss={() => this.state.changedItem && this.props.onChange(this.state.changedItem)}
        >
          {this._renderMenu()}
        </Modal>

        <TouchableOpacity
          hitSlop={{ top: 0, bottom: 0, left: 0, right: 0 }}
          activeOpacity={0.2}
          style={this.props.openButtonStyle}
          onPress={this.open}
          disabled={this.props.disabled}
        >
          <View style={this.props.childrenViewStyle} pointerEvents="none">
            {this._renderChildrenProps()}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

Menu.defaultProps = defaultProps;