import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CategoriesScreen from "../screens/CategoriesScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "../screens/MealsOverviewScreen";

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Stack.Navigator>
        <Stack.Screen name="MealsCategories" component={CategoriesScreen} />
        <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
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
