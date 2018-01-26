import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import StatusBar from './StatusBar';
import withTheme from './theme/withThemeHoc';

const { width, height } = Dimensions.get('window');

class NavBar extends Component {

	images = {
		moonOutline: require('./images/moon2.png'),
		moonFill: require('./images/moon.png'),
		back: require('./images/back.png'),		
	}

	componentWillMount() {
		StatusBar.setDarkStatusBar();
	}

	render() {
		const iconSource = this.props.theme.darkMode ? this.images.moonFill : this.images.moonOutline;

		return (
			<View style={[styles.container, {backgroundColor: this.props.theme.darkMode ? colors.blue200 : colors.white}]}>
				<TouchableOpacity onPress={()=> {}}>
					<Image style={styles.icon} source={this.images.back} resizeMode="contain"/>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=> {}}>
					<View style={styles.textContainer}>
						<Text style={[styles.header, this.props.theme.darkMode && {color: colors.white}]}>Doggo 🐶</Text>
						<Text style={styles.subtitle}>@doggo</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={this.props.onPress}>
					<Image style={styles.icon} source={iconSource} />
				</TouchableOpacity>
			</View>
		)
	}
}

NavBar.defaultProps = {
  theme: {
    darkMode: false,
  }
}

export default withTheme(NavBar);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width,
		maxHeight: 128,
		paddingTop: 40,
		borderBottomColor: colors.grey200,
		borderBottomWidth: 1,
		paddingHorizontal: 16,
	},
	icon: {
		width: 20,
		height: 20,
		marginBottom: 16
	}, 
	textContainer: {
		alignItems: 'center'
	},
	header: {
		fontSize: 20, 
		fontWeight: 'bold',
		color: colors.black,
	}, 
	subtitle: {
		color: colors.grey200
	}, 
})