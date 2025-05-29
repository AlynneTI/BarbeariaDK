import BarberAppointmentScreen from "../appointment/barber-appointment";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./home";
import AppointmentStack from "../appointment/appointment-stack";
import ProfileStack from "../profile/profile-stack";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeMain" component={HomeScreen} />
      <Stack.Screen name="Appointment" component={AppointmentStack} />
    </Stack.Navigator>
  );
}
