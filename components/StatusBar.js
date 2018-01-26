import { StatusBar } from 'react-native';

export function LightStatusBar() {
  return (
    <StatusBar
      translucent={true}
      barStyle="light-content"
      backgroundColor="transparent"
    />
  );
}

export function DarkStatusBar() {
  return (
    <StatusBar
      translucent={true}
      barStyle="dark-content"
      backgroundColor="transparent"
    />
  );
}

export default {
  setLightStatusBar() {
    StatusBar.setBarStyle('light-content');
  },

  setDarkStatusBar() {
    StatusBar.setBarStyle('dark-content');
  },
};
