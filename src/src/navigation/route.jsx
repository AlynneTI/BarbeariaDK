import RootStack from "./root-stack";
import { NavigationContainer } from "@react-navigation/native";

export default function Route() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}
