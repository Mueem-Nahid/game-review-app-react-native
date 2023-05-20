import React, { useEffect, useState } from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import Game from "../components/Game";
import axios from "axios";
import { REACT_APP_BASE_API_URL } from '@env';


const HomeScreen = () => {
   const [games, setGames] = useState([]);
   const getGames = () => {
      axios.get(`${REACT_APP_BASE_API_URL}/all-games`, {
      })
         .then((response) => {
            // handle success
            setGames(response.data.data.games);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
         .then(function () {
            // always executed
         });
   }

   useEffect(() => {
      getGames();
   }, []);

   return (
      <SafeAreaView style={styles.container}>
         <FlatList
            data={games}
            renderItem={({ item }) =>
               <Game
                  urlToImage={item.picture[0].url}
                  title={item.title}
                  summary={item.summary}
                  averageRating={item.averageRating}
                  totalReviews={item.totalReviews}
                  releaseDate={item.releaseDate}
                  id={item._id}
               />}
            keyExtractor={(item) => item.title}
         />

      </SafeAreaView>
   )
}

export default HomeScreen;

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   }
})