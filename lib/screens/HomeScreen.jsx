import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


import ButtonComponent from '../components/ButtonComponent';
import RecipeData from '../data/recipeData';
import DessertData from '../data/dessertData';
import SoupData from '../data/soupData';


function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <ButtonComponent title="Pagrindiniai patiekalai" onPress={() => { navigation.navigate('Main Dishes', { mainRecipes: RecipeData }) }} />
            <ButtonComponent title="Sriubos" onPress={() => { navigation.navigate('Soups', { soupRecipes: SoupData }) }} />
            <ButtonComponent title="Desertai" onPress={() => { navigation.navigate('Desserts', { desertRecipes: DessertData }) }} />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around'
    },
})