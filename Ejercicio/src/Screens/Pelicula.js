import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import peli from "../utils/Peliculas.json"
import YouTube from "react-native-youtube";


export default function Pelicula({route}){
    let indice = route.params['indice'];
    let clasificacion = route.params['clasificacion']
    return(
        <View style={styles.contenedor}>
            <Text style={styles.text} >
                {peli[clasificacion][indice].nombre}
            </Text>
            <YouTube
                apiKey="AIzaSyBNTpKXLmASqFaubwPSOdC2SndWWOGFHe4"
                videoId={peli[clasificacion][indice].portada}
                play // control playback of video with true/false
                //fullscreen // control whether the video should play in fullscreen or inline
                loop // control whether the video should loop when ended
                // onReady={e => this.setState({ isReady: true })}
                //onChangeState={e => this.setState({ status: e.state })}
                //onChangeQuality={e => this.setState({ quality: e.quality })}
                //onError={e => this.setState({ error: e.error })}
                style={{ alignSelf: 'stretch', height: 300 }}
            >
                
            </YouTube>
        </View>
    );
}

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: 'black',
        flex: 1,
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
        textAlign: 'center',
        margin: 25,
    },
});