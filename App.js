import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from './src/pages/LoginPage';
import RegisterPage from './src/pages/RegisterPage';
import ForgotPassPage from './src/pages/ForgotPassPage';
import DashboardPage from './src/pages/DashboardPage';
import RpgPage from './src/pages/RpgPage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="loginPage" component={LoginPage} options={{ headerShown: false }}/>
        <Stack.Screen name="registerPage" component={RegisterPage} options={{ headerShown: false }}/>
        <Stack.Screen name="forgotPassPage" component={ForgotPassPage} options={{ headerShown: false }}/>
        <Stack.Screen name="dashboardPage" component={DashboardPage} options={{ title: "Dashboard" }}/>
        <Stack.Screen name="rpgPage" component={RpgPage} options={{ title: "Página de Trocas" }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}