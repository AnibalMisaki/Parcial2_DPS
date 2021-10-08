import React from "react";
import { View, Text,ScrollView, StyleSheet, TouchableHighlight, Image } from "react-native";
import { color } from "react-native-elements/dist/helpers";

export default function Series(props){
    const {navigation} = props;
    return(
        <>
            <ScrollView>
                <View style={styles.contenedor}>
                    <Text style={styles.text}>Estrenos recientes</Text>
                    <ScrollView horizontal>
                        <View>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Comedia",
                                })}}
                            >
                                <Image style={styles.baner} source={require('../img/comedia/serie1.jpg')}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                        <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Aventura",
                                })}}
                            >
                                <Image style={styles.baner} source={require('../img/aventura/serie1.jpg')}/>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Fantasia",
                                })}}
                            >
                                <Image style={styles.baner} source={require('../img/fantasia/serie1.jpg')}/>
                            </TouchableHighlight>
                        </View>
                    </ScrollView>
                    <View>
                        <Text style={styles.text}>Comedia</Text>
                        <ScrollView vertical>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Comedia",
                                })}}
                            >
                                <View style={styles.serie}>
                                
                                    <Image style={styles.baner2} source={require('../img/comedia/serie1.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Ryck y morty
                                        </Text>
                                        <Text style={styles.stext}>5 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 1,
                                    clasificacion: "Comedia",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/comedia/serie2.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Broklyn 99
                                        </Text>
                                        <Text style={styles.stext}>8 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 2,
                                    clasificacion: "Comedia",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/comedia/serie3.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Friends
                                        </Text>
                                        <Text style={styles.stext}>10 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.text}>Aventura</Text>
                        <ScrollView vertical>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Aventura",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/aventura/serie1.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            One Piece
                                        </Text>
                                        <Text style={styles.stext}>1 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 1,
                                    clasificacion: "Aventura",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/aventura/serie2.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Final Space
                                        </Text>
                                        <Text style={styles.stext}>3 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 2,
                                    clasificacion: "Aventura",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/aventura/serie3.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Loki
                                        </Text>
                                        <Text style={styles.stext}>1 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
                    <View>
                        <Text style={styles.text}>Fantasia</Text>
                        <ScrollView vertical>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 0,
                                    clasificacion: "Fantasia",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/fantasia/serie1.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Game of Thrones
                                        </Text>
                                        <Text style={styles.stext}>8 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 1,
                                    clasificacion: "Fantasia",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/fantasia/serie2.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Castlevania
                                        </Text>
                                        <Text style={styles.stext}>4 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                            <TouchableHighlight
                                onPress={() => {navigation.navigate('Serie',{
                                    indice: 2,
                                    clasificacion: "Fantasia",
                                })}}
                            >
                                <View style={styles.serie}>
                                    <Image style={styles.baner2} source={require('../img/fantasia/serie3.jpg')}/>
                                    <ScrollView vertical>
                                        <Text style={styles.stext}>
                                            Lucifer
                                        </Text>
                                        <Text style={styles.stext}>6 Temporadas</Text>
                                    </ScrollView>
                                </View>
                            </TouchableHighlight>
                        </ScrollView>
                    </View>
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