import React from "react";
import { View, Text, ScrollView, StyleSheet, Image } from "react-native";
import YouTube from "react-native-youtube";

export default function Proximamente(){
    return(
        <>
            <ScrollView>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>Proximamente</Text>
                    <ScrollView vertical>
                        <View style={styles.serie}>
                        <YouTube
                            apiKey="AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4"
                            videoId='dl3w10VVQj8'
                            play
                            loop
                            style={{ alignSelf: 'stretch', height: 300 }}
                        />
                            <ScrollView vertical>
                                <Text style={styles.stext}>
                                    Falcon and the winter Soldier
                                </Text>
                                <Text style={styles.stext}>Serie disponible en noviembre de 2021</Text>
                            </ScrollView>
                        </View>
                        <View style={styles.serie}>
                        <YouTube
                            apiKey="AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4"
                            videoId="Idl3w10VVQj8"
                            play
                            loop
                            style={{ alignSelf: 'stretch', height: 300 }}
                        />
                            <ScrollView vertical>
                                <Text style={styles.stext}>
                                    Dragon Ball Super Broly
                                </Text>
                                <Text style={styles.stext}>Pelicula disponible en noviembre de 2021</Text>
                            </ScrollView>
                        </View>
                        <View style={styles.serie}>
                        <YouTube
                            apiKey="AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4"
                            videoId="IWBsDaFWyTE"
                            play
                            loop
                            style={{ alignSelf: 'stretch', height: 300 }}
                        />
                            <ScrollView vertical>
                                <Text style={styles.stext}>
                                    Falcon and the winter Soldier
                                </Text>
                                <Text style={styles.stext}>Serie disponible en noviembre de 2021</Text>
                            </ScrollView>
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: 'black',
        
      },
      serie:{
          flexDirection: 'row',
          
      },
      stext:{
          fontSize: 20,
          color: 'white',
          textAlign: 'center',
          marginTop:15
      },
      baner:{
        width:400,
        height:300,
        marginRight:10
      },
      text: {
          color: 'red',
          fontWeight: 'bold',
          fontSize: 25,
          margin: 25,
      },
      baner2: {
          width: 150,
          height:150,
          marginRight:10
      },
})