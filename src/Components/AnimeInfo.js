import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import AddToList from './AddToList'; 

const AnimeInfo = ({ animeInfo, addTo }) => {

  const { title, images: { jpg: { large_image_url } }, source, rank, score, popularity, members, status, rating, duration, synopsis } = animeInfo;


  return (
    <View style={styles.animeContent}>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: large_image_url }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.rank}>Rank: {rank}</Text>
        <Text style={styles.score}>Score: {score}</Text>
        <Text style={styles.popularity}>Popularity: {popularity}</Text>
        <View style={styles.hr} />

        <Text style={styles.members}>Members: {members}</Text>
        <Text style={styles.source}>Source: {source}</Text>
        <Text style={styles.duration}>Duration: {duration}</Text>
        <Text style={styles.status}>Status: {status}</Text>
        <Text style={styles.rating}>Rating: {rating}</Text>

        <View style={styles.buttonContainer}>
          <AddToList handleList={() => addTo(animeInfo)} anime={animeInfo} />
        </View>

        <Text style={styles.synopsisHeading}>SYNOPSIS</Text>
        <ScrollView style={styles.synopsisScroll}>
          <Text style={styles.synopsis}>{synopsis}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  animeContent: {
    padding: 10,
    marginVertical: 20,
    marginTop: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 350,
    marginVertical: 10,
  },
  info: {
    marginTop: 10,
  },
  rank: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  popularity: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  hr: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    marginVertical: 10,
  },
  members: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  source: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  duration: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  status: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  rating: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  synopsisHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    color: 'black',
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  synopsis: {
    marginTop: 6,
    fontWeight: 'bold',
    color: 'black',
  },
});

export default AnimeInfo;
