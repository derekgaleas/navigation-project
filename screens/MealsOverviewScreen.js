import { MEALS } from "../data/dummy-data";
import { View, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  function renderMealItem(item) {
    return (
      <MealItem
        title={item.item.title}
        imageUrl={item.item.imageUrl}
        duration={item.item.duration}
        complexity={item.item.complexity}
        affordability={item.item.affordability}
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
