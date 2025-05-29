import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProfileScreen from "./profile";
import AppointmentStack from "../appointment/appointment-stack";

const Stack = createNativeStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileMain" component={ProfileScreen} />
      <Stack.Screen name="Appointment" component={AppointmentStack} />
    </Stack.Navigator>
  );
}
