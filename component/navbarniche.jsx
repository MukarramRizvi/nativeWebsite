import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Navbarniche = () => {
  return (
    <View>
      <Image
        source={{ uri: 'https://i.dawn.com/primary/2021/12/61b0db8fc2735.jpg' }} // Online image
        style={styles.image}
      />
      {/* Local image ka istemal karne ke liye: source={require('./path/to/image.jpg')} */}
    </View>
  );
};

const styles = StyleSheet.create({

  image: {
    width: "100%",
    height: 300,
  },
});

export default Navbarniche;
