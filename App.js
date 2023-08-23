import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View } from 'react-native';
import ImageViewer from './src/components/ImageViewer';

const placeholderImage = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="inverted" />
      <View style={styles.imageContainer}>
        <ImageViewer placerholderImageSource={placeholderImage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer:{
    flex: 1,
    paddingTop: 58,
  },
});
