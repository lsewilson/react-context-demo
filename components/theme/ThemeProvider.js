import React, { Component, Children } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');
export default class ThemeProvider extends Component {
  static propTypes = {
    darkMode: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    darkMode: true,
  }

  // you must specify what you’re adding to the context
  static childContextTypes = {
    theme: PropTypes.shape({
        darkMode: PropTypes.bool.isRequired,
    }).isRequired,
  }
  
  getChildContext() {
   const { darkMode } = this.props
   return { theme: { darkMode }};
  }

  render() {
    // `Children.only` enables us not to add a <div /> for nothing
    return Children.only(this.props.children)
  }
}