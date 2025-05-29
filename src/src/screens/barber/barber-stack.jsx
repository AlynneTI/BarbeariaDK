import BarberAppointmentScreen from "../appointment/barber-appointment";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarberScreen from "./barber";
import AppointmentStack from "../appointment/appointment-stack";

const Stack = createNativeStackNavigator();

export default function BarberStack({ route }) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="BarberMain"
        component={BarberScreen}
        initialParams={route.params}
      />
      <Stack.Screen name="Appointment" component={AppointmentStack} />
    </Stack.Navigator>
  );
}
