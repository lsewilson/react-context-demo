import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';
import withTheme from './theme/withThemeHoc';
import colors from './colors';

const { width, height } = Dimensions.get('window');
const Container = props => (
  <View style={[styles.container, props.theme.darkMode ? styles.dark : styles.light]}>
    {props.children}
  </View>
);

const styles = StyleSheet.create({
  container: {
    height,
    width,
  },
  dark: {
    backgroundColor: colors.blue300
  },
  light: {
    backgroundColor: colors.white
  }
})

Container.defaultProps = {
  theme: {
    darkMode: false,
  }
}

export default withTheme(Container)