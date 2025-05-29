import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./bottom-tab";
import WelcomeScreen from "../auth/welcome";
import SignUpScreen from "../auth/signUp";
import SignInScreen from "../auth/signIn";

const Stack = createNativeStackNavigator();

export default function RootStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="signIn" component={SignInScreen} />
      <Stack.Screen name="signUp" component={SignUpScreen} />
      <Stack.Screen name="bottom-tab" component={BottomTab} />
    </Stack.Navigator>
  );
}
