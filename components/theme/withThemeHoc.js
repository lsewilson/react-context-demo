import React, { Component } from 'react';
import PropTypes from 'prop-types';

const withTheme = (WrappedComponent) => {
  return class ThemedComponent extends Component {
    // let’s define what’s needed from the `context`
    static contextTypes = {
      theme: PropTypes.shape({
          darkMode: PropTypes.bool.isRequired,
      }).isRequired,
    }

    render() {
      const { theme } = this.context
      // what we do is basically rendering `WrappedComponent`
      // with an added `theme` prop, like a hook
      return (
        <WrappedComponent {...this.props} theme={theme} />
      )
    }
  }
}
export default withTheme