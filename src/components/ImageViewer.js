import { StyleSheet, Image } from 'react-native';

export default function ImageViewer({placerholderImageSource}) {
return(<Image style={styles.image} source={placerholderImageSource}/>)
}

const styles = StyleSheet.create({
    image:{
      width: 320,
      height: 440,
      borderRadius: 18
    },
  });
  