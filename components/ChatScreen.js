import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { GiftedChat, Actions, Bubble, SystemMessage, Message, MessageText } from './react-native-gifted-chat'
import PropTypes from 'prop-types';
import CustomActions from './CustomActions';
import withTheme from './theme/withThemeHoc';
import colors from './colors';

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      loadEarlier: true,
      typingText: null,
      isLoadingEarlier: false,
    };

    this._isMounted = false;
    this.onSend = this.onSend.bind(this);
    this.onReceive = this.onReceive.bind(this);
    this.renderCustomActions = this.renderCustomActions.bind(this);
    this.renderBubble = this.renderBubble.bind(this);
    this.renderMessageText = this.renderMessageText.bind(this);
    this.renderSystemMessage = this.renderSystemMessage.bind(this);
    this.renderFooter = this.renderFooter.bind(this);

    this._isAlright = null;
  }

  componentWillMount() {
    this._isMounted = true;
    this.setState(() => {
      return {
        messages: require('../data/messages.js'),
      };
    });
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  onSend(messages = []) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });

    // for demo purpose
    this.answerDemo(messages);
  }

  answerDemo(messages) {
    if (messages.length > 0) {
      if ((messages[0].image || messages[0].location) || !this._isAlright) {
        this.setState((previousState) => {
          return {
            typingText: 'React Native is typing'
          };
        });
      }
    }

    setTimeout(() => {
      if (this._isMounted === true) {
        if (messages.length > 0) {
          if (messages[0].image) {
            this.onReceive('Nice picture!');
          } else if (messages[0].location) {
            this.onReceive('My favorite place');
          } else {
            if (!this._isAlright) {
              this._isAlright = true;
              this.onReceive('Alright');
            }
          }
        }
      }

      this.setState((previousState) => {
        return {
          typingText: null,
        };
      });
    }, 1000);
  }

  onReceive(text) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id: Math.round(Math.random() * 1000000),
          text: text,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            // avatar: 'https://facebook.github.io/react/img/logo_og.png',
          },
        }),
      };
    });
  }

  renderCustomActions(props) {
    return (
      <CustomActions
        {...props}
      />
    );
  }

  renderBubble = (props) => {
    return (
      <Bubble
        {...props}
      />
    );
  }

  renderSystemMessage(props) {
    return (
      <SystemMessage
        {...props}
        containerStyle={{
          marginBottom: 15,
        }}
        textStyle={{
          fontSize: 14,
        }}
      />
    );
  }

  renderFooter(props) {
    if (this.state.typingText) {
      return (
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {this.state.typingText}
          </Text>
        </View>
      );
    }
    return null;
  }

  renderMessageText(props) {
    let style = {};
    if (this.props.theme.darkMode) {
      style.left = {
        color: colors.white,
      }
      style.right = {
        color: colors.white,
      }
    } else {
      style.left = {
        color: colors.black,
      }
      style.right = {
        color: colors.white,
      }
    }

    return (
      <MessageText
        {...props}
        textStyle={style}
      />
    );
  }

  render() {
    const theme = this.props.theme.darkMode ? 'dark' : 'light';

    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1, // sent messages should have same user._id
        }}
        renderActions={this.renderCustomActions}
        renderBubble={this.renderBubble}
        renderSystemMessage={this.renderSystemMessage}
        renderMessageText={this.renderMessageText}
        renderFooter={this.renderFooter}
        textInputStyle={myStyles[theme].textInputStyle}
        containerStyle={containerStyle[theme]}
        placeholderTextColor={this.props.theme.darkMode ? colors.white : colors.grey300}
        placeholder="Start a message"
        messageTextStyle={textStyle[theme]}
      />
    );
  }
}

const containerStyle = {
  dark: {
    backgroundColor: colors.blue200,
  }, 
  light: {
    backgroundColor: colors.white,
  }
}

const textStyle = {
  dark: StyleSheet.create({
    left: {
      color: colors.white,
    },
    right: {
      color: colors.white,
    }
  }),
  light: StyleSheet.create({
    left: {
      color: colors.white,
    },
    right: {
      color: colors.white,
    }
  })
}

const myStyles = {
  dark: StyleSheet.create({
    textInputStyle: {
      borderRadius: 20,
      paddingLeft: 16,
      marginRight: 64,
      backgroundColor: colors.blue400,
    },
  }),
  light: StyleSheet.create({
    textInputStyle: {
      borderRadius: 20,
      paddingLeft: 16,
      marginRight: 64,
      backgroundColor: colors.grey100,
    },
  })
}

ChatScreen.defaultProps = {
  theme: {
    darkMode: false,
  }
}

export default withTheme(ChatScreen)

const styles = StyleSheet.create({
  footerContainer: {
    marginTop: 5,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#aaa',
  },
});
