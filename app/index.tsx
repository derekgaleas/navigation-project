import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";
import MealDetailScreen from "../screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoritesScreen from "../screens/FavoritesScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        headerTitleStyle: { fontWeight: "bold" },
        headerTitleAlign: "center",
        sceneStyle: { backgroundColor: "#3f2f25" },
      }}
    >
      <Drawer.Screen name="Categories" component={CategoriesScreen} />
      <Drawer.Screen name="Favorites" component={FavoritesScreen} />
    </Drawer.Navigator>
  );
}

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
          component={DrawerNavigator}
          options={{
            headerShown: false,
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
