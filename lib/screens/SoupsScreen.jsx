import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';

import RecipeComponent from '../components/RecipeComponent';

export default function SoupsScreen({ route, navigation }) {

  const { soupRecipes } = route.params;
  console.log(soupRecipes);

  console.log(soupRecipes[0].ingredients);
  return (
    <ScrollView>
      <View style={styles.container}>
        {soupRecipes.map((item) => (<RecipeComponent
          key={item.id}
          navigation={navigation}
          recipe={item}
        />))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
})