import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import loginPage from './src/pages/loginPage';
import registerPage from './src/pages/registerPage';
import forgotPassPage from './src/pages/forgotPassPage';
import dashboardPage from './src/pages/dashboardPage';
import rpgPage from './src/pages/rpgPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginPage" component={loginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="registerPage" component={registerPage} options={{ headerShown: false }}/>
        <Stack.Screen name="forgotPassPage" component={forgotPassPage} options={{ headerShown: false }}/>
        <Stack.Screen name="dashboardPage" component={dashboardPage} options={{ title: "Dashboard" }}/>
        <Stack.Screen name="rpgPage" component={rpgPage} options={{ title: "Página de Trocas" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}