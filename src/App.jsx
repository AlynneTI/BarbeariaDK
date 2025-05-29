import Route from "./src/navigation/route";
import { PaperProvider, MD3LightTheme } from "react-native-paper";
import Colors from "./src/constants/Colors.js";

const theme = { ...MD3LightTheme, colors: Colors.light };

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <Route />
    </PaperProvider>
  );
}
