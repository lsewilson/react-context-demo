import React, { Component } from 'react';
import Container from './Container';
import ChatScreen from './ChatScreen';
import NavBar from './NavBar';
import ThemeProvider from './theme/ThemeProvider';
import TabBar from './TabBar';
export default class Example extends Component {
  state = {
    darkMode: false,
  }

  switchTheme = () => this.setState({ darkMode: !this.state.darkMode });

  render() {
    return (
      <ThemeProvider darkMode={this.state.darkMode}>
        <Container>
          <NavBar onPress={this.switchTheme}/>
          <ChatScreen />
          <TabBar/>
        </Container>
      </ThemeProvider>
    );
  }
}