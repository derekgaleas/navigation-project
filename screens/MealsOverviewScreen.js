import { useLayoutEffect } from "react";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  function onPressHandler(id) {
    navigation.navigate("MealDetails", {
      mealId: id,
    });
  }

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  function renderMealItem(item) {
    return (
      <MealItem
        title={item.item.title}
        imageUrl={item.item.imageUrl}
        duration={item.item.duration}
        complexity={item.item.complexity}
        affordability={item.item.affordability}
        onPress={() => onPressHandler(item.item.id)}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={(item) => renderMealItem(item)}
      />
    </View>
  );
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
