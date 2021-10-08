import React from 'react'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Peliculas from '../Screens/Peliculas';
import Series from '../Screens/Series';
import Proximamente from '../Screens/Proximamente';
import Pelicula from '../Screens/Pelicula';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Serie from '../Screens/Serie';


const tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function tabBar (){
    return(
        <tab.Navigator initialRouteName="Peliculas"
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) =>{
                    let iconName;

                    if (route.name === 'Peliculas') {
                    iconName = focused ? 'movie' : 'movie';
                    } else if (route.name === 'Series') {
                    iconName = focused ? 'slideshow' : 'slideshow';
                    } else if(route.name === 'Proximamente'){
                        iconName = focused ? 'add' : 'add'
                    }
        
                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                    
                }
            })}
        >
            <tab.Screen name="Peliculas" component={Peliculas} options={{
                    title: 'Peliculas',
                    tabBarStyle:{
                        backgroundColor: "black",
                    },
                    tabBarActiveTintColor: "red",
                    
                }} />
            <tab.Screen name="Series" component={Series} options={{
                title: 'Series',
                tabBarStyle:{
                    backgroundColor: "black",
                },
                tabBarActiveTintColor: "red",
            }} />
            <tab.Screen name="Proximamente" component={Proximamente} options={{
                title: 'Proximamente',
                tabBarStyle:{
                    backgroundColor: "black",
                },
                tabBarActiveTintColor: "red",
            }} />
        </tab.Navigator>
    );
    
}


export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen name="tabBar" component={tabBar} options={{ headerShown: false }}/>
            <Stack.Screen name="Pelicula" component={Pelicula} />
            <Stack.Screen name="Serie" component={Serie} />
        </Stack.Navigator>
        
    );
}