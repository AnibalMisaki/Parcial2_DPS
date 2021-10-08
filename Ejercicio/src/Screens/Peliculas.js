import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableHighlight} from "react-native";
import { Animated } from 'react-native';
import { Button } from "react-native-elements/dist/buttons/Button";
import Icon from 'react-native-vector-icons/MaterialIcons';
import Pelicula from "./Pelicula";


export default function Peliculas(props){
    const {navigation} = props;

    return(
        <>
            <ScrollView>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>Estrenos recientes</Text>
                    <ScrollView horizontal>
                        <View>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Pelicula',{
                                    indice: 0,
                                    clasificacion: "Comedia",
                                })}}
                            >
                                <Image style={styles.baner} source={require('../img/comedia/peli1.jpg')}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 0,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                <Image style={styles.baner} source={require('../img/accion/peli1.jpg')}/>
                            </TouchableHighlight>   
                        </View>
                        <View>
                            <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 0,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                <Image style={styles.baner} source={require('../img/romance/peli1.jpg')}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                    <View>
                        <Text style={styles.text}>Comedia</Text>
                        <ScrollView horizontal>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 0,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli1.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 1,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli2.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 2,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli3.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 3,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli4.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 4,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli5.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 5,
                                        clasificacion: "Comedia",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/comedia/peli6.jpg')}/>
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.text}>Romance</Text>
                        <ScrollView horizontal>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 0,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli1.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 1,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli2.jpeg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                            <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 2,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli3.jpeg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 3,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli4.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 4,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli5.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                            <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 5,
                                        clasificacion: "Romance",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/romance/peli6.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <View style={styles.mas}>
                                    <Icon name="add-circle" color="white" style={styles.icon}></Icon>
                                    <Button title="Ver mas..."></Button>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.text}>Accion</Text>
                        <ScrollView horizontal>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 0,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli1.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 1,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli2.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 2,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli3.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 3,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli4.jpg')}/>
                                </TouchableHighlight>
                            </View>
                            <View>
                             <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 4,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli5.jpg')}/>
                                </TouchableHighlight>
                            </View> 
                            <View>
                                <TouchableHighlight
                                    onPress={() => {navigation.navigate('Pelicula',{
                                        indice: 5,
                                        clasificacion: "Accion",
                                    })}}
                                >
                                    <Image style={styles.baner2} source={require('../img/accion/peli6.jpg')}/>
                                </TouchableHighlight>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    contenedor:{
        backgroundColor: 'black',
        
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
      },
      baner2: {
          width: 150,
          height:150,
          marginRight:10
      },
      mas: {
        width: 150,
        height:150,
        marginRight:10,
        color: 'white',
        fontSize: 25
      },
      icon:{
          fontSize: 50,
          textAlign: 'center',
          paddingTop: 25,
      }
})