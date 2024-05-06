import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import RemoveFromList from './RemoveFromList'; 

const AnimeList = ({ animelist, setAnimeInfo, handleList }) => {
  return (
    <ScrollView horizontal>
      {animelist && animelist.length > 0 ? (
        animelist.map((anime, index) => (
          <View key={index} style={styles.cardContainer}>
            <TouchableOpacity
              style={styles.card}
              onPress={() => setAnimeInfo(anime)}
            >
              <Image
                source={{ uri: anime.images.jpg.large_image_url }}
                style={styles.image}
                resizeMode="cover"
              />
              <View style={styles.titleContainer}>
                <Text style={styles.title}>{anime.title}</Text>
              </View>
            </TouchableOpacity>
            <RemoveFromList handleList={() => handleList(anime)} />
          </View>
        ))
      ) : (
        <Text style={styles.notFoundText}>Not Found</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 10,
    marginTop: 20,
  },
  card: {
    width: 200,
    height: 430,
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 150,
  },
  titleContainer: {
    padding: 10,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  notFoundText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default AnimeList;
