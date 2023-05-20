import { StyleSheet, } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: "red"
      }}>
        <Tab.Screen name="Game Insights" component={HomeScreen} options={{
          tabBarIcon: () => <Entypo name="home" size={24} color="black" />
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
