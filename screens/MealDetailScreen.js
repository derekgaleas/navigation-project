import { Text } from "react-native";
import { MEALS } from "../data/dummy-data";
import { useLayoutEffect } from "react";

function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  useLayoutEffect(() => {
    const mealTitle = MEALS.find((meal) => meal.id === mealId).title;

    navigation.setOptions({
      title: mealTitle,
    });
  }, [mealId, navigation]);

  return <Text>Meal details {mealId}</Text>;
}

export default MealDetailScreen;
