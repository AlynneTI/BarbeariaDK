import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "./search";
import BarberStack from "../barber/barber-stack";

const Stack = createNativeStackNavigator();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchMain" component={SearchScreen} />
      <Stack.Screen name="Barber" component={BarberStack} />
    </Stack.Navigator>
  );
}
