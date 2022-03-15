/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useEffect, useState} from 'react';
import {
  Button,
  SafeAreaView,
  StatusBar,
  Linking,
  useColorScheme,
  View,
  StyleProp,
  ViewStyle,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const viewStyle: StyleProp<ViewStyle> = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: '100%',
  };

  const btnStyle: StyleProp<ViewStyle> = {
    backgroundColor: '#336699',
    width: 150,
  };

  const [inintUrl, setInintUrl] = useState('');

  const onAppWokUp = (event: {url: string}) => {
    console.log('uuuuurl', event.url);
    setInintUrl(event.url);
  };

  useEffect(() => {
    Linking.getInitialURL().then(url => {
      if (url) {
        setInintUrl(url);
      }
    });
    Linking.addEventListener('url', onAppWokUp);
    return () => {
      Linking.removeEventListener('url', onAppWokUp);
    };
  }, []);
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={viewStyle}>
        <Text>{inintUrl}</Text>
        <View style={btnStyle}>
          <Button
            color="#fff"
            title="Go to Sign"
            onPress={() => {
              console.log('hello');
              Linking.openURL(
                'https://metamask.app.link/dapp/sign-0xleung-com.pages.dev',
              );
            }}>
            Sign
          </Button>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default App;
