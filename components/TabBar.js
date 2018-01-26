import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import colors from './colors';
import StatusBar from './StatusBar';
import withTheme from './theme/withThemeHoc';

const { width, height } = Dimensions.get('window');

class TabBar extends Component {

	images = {
		birdNest: require('./images/home.png'),
    search: require('./images/search.png'),
    bell: require('./images/bell.png'),
    mail: require('./images/mail.png'),
	}

	render() {

		return (
			<View style={[styles.container, {backgroundColor: this.props.theme.darkMode ? colors.blue200 : colors.white}]}>
				<TouchableOpacity onPress={()=> {}}>
					<Image style={styles.icon} source={this.images.birdNest} />
				</TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
					<Image style={styles.icon} source={this.images.search} />
				</TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
					<Image style={styles.icon} source={this.images.bell} />
				</TouchableOpacity>
        <TouchableOpacity onPress={()=> {}}>
					<Image style={styles.icon} source={this.images.mail} resizeMode="contain" />
				</TouchableOpacity>
			</View>
		)
	}
}

TabBar.defaultProps = {
	theme: {
		darkMode: false,
	}
}

export default withTheme(TabBar);

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		width,
    minHeight: 48,
    paddingHorizontal: 40,
	},
	icon: {
		width: 20,
		height: 20,
	}
})