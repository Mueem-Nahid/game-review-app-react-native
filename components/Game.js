import React from "react";
import { View, StyleSheet, Text, Pressable, Image } from "react-native";
import moment from "moment";
import * as WebBrowser from 'expo-web-browser';
import { REACT_APP_WEBSITE_URL } from '@env';

const Game = (props) => {
   const gameDetails = `${REACT_APP_WEBSITE_URL}/game/${props.id}`

   const goToSource = () => {
      WebBrowser.openBrowserAsync(gameDetails);
   }

   return (
      <Pressable style={styles.container} onPress={goToSource}>
         {/* image */}
         <Image source={{
            uri: props.urlToImage
         }}
            style={styles.image}
         />

         <View style={{ padding: 20 }}>
            {/*    title */}
            <Text style={styles.title}>{props.title}</Text>

            {/*    summary */}
            <Text style={styles.summary} numberOfLines={3}>
               {props.summary}
            </Text>

            <View style={styles.data}>
               <Text style={styles.reviewRating}>Average rating: <Text>{props.averageRating}</Text></Text>
               <Text style={styles.reviewRating}>Total reviews: <Text>{props.totalReviews}</Text></Text>
            </View>

            {/* source */}
            <View style={{ marginTop: 10 }}>
               <Text style={styles.releaseDate}>Released at: {moment(props.releaseDate).format("MMM Do YY")}</Text>
            </View>
         </View>
      </Pressable>
   )
}

export default Game;

const styles = StyleSheet.create({
   container: {
      width: "90%",
      alignSelf: "center",
      borderRadius: 10,
      shadowOpacity: 0.05,
      shadowColor: "#000",
      shadowOffset: {
         height: 1,
         width: 1
      },
      backgroundColor: "#fff",
      marginTop: 20
   },
   image: {
      height: 200,
      width: "100%",
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10
   },
   title: {
      fontSize: 18,
      fontWeight: "600",
      marginTop: 10
   },
   summary: {
      fontSize: 16,
      fontWeight: "400",
      marginTop: 10
   },
   data: {
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10
   },
   releaseDate: {
      color: "gray",
      fontSize: 15
   },
   reviewRating: {
      color: "#e63946",
      fontWeight: "bold",
   }
})