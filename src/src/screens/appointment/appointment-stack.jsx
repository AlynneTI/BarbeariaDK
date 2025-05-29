import BarberAppointmentScreen from "../appointment/barber-appointment";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ServiceAppointmentScreen from "./service-appointment";
import AppointmentConfirmScreen from "./appointment-confirm";

const Stack = createNativeStackNavigator();

export default function AppointmentStack({ route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="AppointmentMain"
        component={BarberAppointmentScreen}
        initialParams={route.params}
      />
      <Stack.Screen
        name="ServiceAppointment"
        component={ServiceAppointmentScreen}
      />
      <Stack.Screen
        name="ConfirmAppointment"
        component={AppointmentConfirmScreen}
      />
    </Stack.Navigator>
  );
}
