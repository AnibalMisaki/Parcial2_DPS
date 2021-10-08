import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import peli from "../utils/Peliculas.json"


export default function Pelicula({route}){
    let indice = route.params['indice'];
    let clasificacion = route.params['clasificacion']
    return(
        <View style={styles.contenedor}>
            <Text style={styles.text} >
                {peli[clasificacion][indice].nombre}
            </Text>
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