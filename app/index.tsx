import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#351401" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold" },
          headerTitleAlign: "center",
          contentStyle: { backgroundColor: "#3f2f25" },
          headerBackTitle: "Back",
        }}
      >
        <Stack.Screen
          name="MealsCategories"
          component={CategoriesScreen}
          options={{
            title: "All Categories",
          }}
        />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
        <Stack.Screen name="MealDetails" component={MealDetailScreen} />
      </Stack.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#24180f",
  },
});
