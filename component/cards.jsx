import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Cards = () => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'https://gnnhd.tv/media/7639/conversions/60e70be4db9a1-1280x720.webp' }}
          style={styles.image}
        />
        <Text style={styles.title}>شہزادہ خادم جانم</Text>
        <Text style={styles.description}>
          پیر طریقت رہبرے شریعت حضرت علامہ مولانا محمد سعد حسین رضوی صاحب
        </Text>
      </View>

      <View style={styles.card}>
        <Image
          source={{ uri: 'https://gnnhd.tv/media/7639/conversions/60e70be4db9a1-1280x720.webp' }} 
          style={styles.image}
        />
        <Text style={styles.title}>شہزادہ خادم جانم</Text>
        <Text style={styles.description}>
          پیر طریقت رہبرے شریعت حضرت علامہ مولانا محمد سعد حسین رضوی صاحب
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row', // Arrange cards in a row
    justifyContent: 'space-around', // Space cards evenly
    alignItems: 'flex-start', // Align items at the start
    backgroundColor: '#f8f8f8',
    padding: 10, // Optional: add padding
  },
  card: {
    width: '45%', // Adjust width to fit two cards
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 4, // Android shadow effect
    shadowColor: '#000', // iOS shadow color
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    padding: 16,
    marginVertical: 10, // Space between cards vertically
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
    color: "black",
  },
  description: {
    fontSize: 15,
    color: 'blue',
  },
});

export default Cards;
