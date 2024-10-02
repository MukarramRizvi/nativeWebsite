// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { View, Text, Image, StyleSheet } from 'react-native';

// const Cards = () => {
//   const [prod, setProd] = useState([]);

//   useEffect(() => {
//     detApiData();
//   }, []);

//   const detApiData = async () => {
//     try {
//       const response = await axios.get('https://fakestoreapi.com/products');
//       console.log('API Response:', response.data); // Log the response
//       setProd(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error); // Log any errors
//     }
//   };

//   return (
//     <View style={styles.container}>
//       {prod.map((e) => (
//         <View key={e.id} style={styles.card}> {/* Use unique ID for key */}
//           <Image
//             source={{ uri: e.image }} // Use the image from the API
//             style={styles.image}
//           />
//           <Text style={styles.title}>{e.title}</Text>
//           <Text style={styles.description}>{e.description}</Text>
//         </View>
//       ))}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap', // Allow wrapping of cards
//     justifyContent: 'space-around',
//     alignItems: 'flex-start',
//     backgroundColor: '#f8f8f8',
//     padding: 10,
//   },
//   card: {
//     width: '45%',
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     elevation: 4,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//     padding: 16,
//     marginVertical: 10,
//   },
//   image: {
//     width: '100%',
//     height: 150,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginVertical: 10,
//     color: 'black',
//   },
//   description: {
//     fontSize: 15,
//     color: 'blue',
//   },
// });

// export default Cards;
