/**
 * Copyright (c) Amyr Ahmady - 2020 | MIT License
**/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({

  overlayStyle: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  closeContainerStyle: {
    alignSelf: 'stretch',
  },

  closeStyle: {
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
    padding: 8,
  },

  closeTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },

  itemStyle: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },

  itemTextStyle: {
    textAlign: 'center',
    fontSize: 16,
    color: 'rgba(0,118,255,0.9)',
  },

  itemContainerStyle: {
    borderRadius: 8,
    flexShrink: 1,
    marginBottom: 8,
    padding: 8,
    backgroundColor: 'rgba(255,255,255,0.9)',
  },

  itemButtonStyle: {
    borderColor: '#333',
    height: 40,
    padding: 8,
  },

  itemButtonTextStyle: {
    textAlign: 'center',
    color: '#333',
    fontSize: 16,
  },
});