import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView } from 'react-native';
import AnimeList from './src/Components/AnimeList';
import AnimeInfo from './src/Components/AnimeInfo';
import AddToList from './src/Components/AddToList';
import RemoveFromList from './src/Components/RemoveFromList';

function App() {
  const [search, setSearch] = useState('Naruto');
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState(null);
  const [myAnimeList, setMyAnimeList] = useState([]);

  const addTo = (anime) => {
    const index = myAnimeList.findIndex((myanime) => myanime.mal_id === anime.mal_id);
    if (index < 0) {
      const newArray = [...myAnimeList, anime];
      setMyAnimeList(newArray);
    }
  };

  const removeFrom = (anime) => {
    const newArray = myAnimeList.filter((myanime) => myanime.mal_id !== anime.mal_id);
    setMyAnimeList(newArray);
  };

  const getData = async () => {
    try {
      const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`);
      const resData = await res.json();
      setAnimeData(resData.data);
    } catch (error) {
      console.error('Error fetching anime data:', error);
    }
  };

  useEffect(() => {
    getData();
  }, [search]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AnimeApp</Text>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.input}
            placeholder="Search your anime"
            onChangeText={(text) => setSearch(text)}
          />
        </View>
      </View>

      <AnimeList
        animelist={animeData}
        setAnimeInfo={setAnimeInfo}
        animeComponent={AddToList}
        handleList={addTo}
      />

      <ScrollView>
        <View style={styles.content}>
          <View style={styles.animeInfo}>
            {animeInfo && <AnimeInfo animeInfo={animeInfo} addTo={addTo} />}
          </View>

          <View style={styles.animeRow}>
            <Text style={styles.textHeading}>My List</Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScrollView}
            >
              <AnimeList
                animelist={myAnimeList}
                setAnimeInfo={setAnimeInfo}
                animeComponent={RemoveFromList}
                handleList={removeFrom}
                isMyList
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#41403d',
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBox: {
    flex: 1,
    marginLeft: 16,
  },
  input: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 8,
  },
  content: {
    flex: 1,
    marginTop: 0,
    paddingHorizontal: 10,
  },
  animeInfo: {
    width: '100%',
    backgroundColor: '#F9F6EE',
    padding: 10,
    marginBottom: 20,
  },
  animeRow: {
    flexDirection: 'column',
  },
  textHeading: {
    marginLeft: 20,
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
  horizontalScrollView: {
    marginTop: 10,
  },
});

export default App;
