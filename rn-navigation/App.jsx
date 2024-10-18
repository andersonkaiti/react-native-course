import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CourseListScreen from "./screens/course-list-screen";
import ProfileScreen from "./screens/profile-screen";
import SettingsScreen from "./screens/settings-screen";
import Ionicons from "@expo/vector-icons/Ionicons";
import { AboutStack } from "./AppStack";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          // Com "beside-icon" a, label fica ao lado do icon
          tabBarLabelPosition: "below-icon",
          // Esconbe a label
          tabBarShowLabel: true,
          tabBarActiveTintColor: "purple",
          // tabBarInactiveTintColor: "red",
        }}
      >
        <Tab.Screen name="Course List" component={CourseListScreen} />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            tabBarLabel: "My profile",
            tabBarIcon: ({ color }) => (
              <Ionicons name="person" size={20} color={color} />
            ),
            // Útil caso haja uma aba de notificação
            tabBarBadge: 3,
          }}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        {/* Aninhando um navegador a outro (Stack Navigator no Tab Navigator) */}
        <Tab.Screen
          name="About Stack"
          component={AboutStack}
          options={{
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
