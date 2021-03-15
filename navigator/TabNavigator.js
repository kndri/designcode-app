import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import SectionScreen from "../screens/SectionScreen";
import CoursesScreen from "../screens/CoursesScreen";
import ProjectsScreen from "../screens/ProjectsScreen";
import { Ionicons } from "@expo/vector-icons";

const activeColor = "#4775f2";
const inactiveColor = "#b8bece";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <HomeStack.Screen
        name="Section"
        component={SectionScreen}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
};

const CourseStack = createStackNavigator();

const CourseStackScreen = () => {
  return (
    <CourseStack.Navigator>
      <CourseStack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{ headerShown: false }}
      />
    </CourseStack.Navigator>
  );
};

const ProjectStack = createStackNavigator();

const ProjectStackScreen = () => {
  return (
    <ProjectStack.Navigator>
      <ProjectStack.Screen
        name="Projects"
        component={ProjectsScreen}
        options={{ headerShown: false }}
      />
    </ProjectStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          size = 26;

          if (route.name === "Home") {
            iconName = "ios-home";
          } else if (route.name === "Courses") {
            iconName = "ios-albums";
          } else if (route.name === "Projects") {
            iconName = "ios-folder";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: activeColor,
        inactiveTintColor: inactiveColor,
      }}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Courses" component={CourseStackScreen} />
      <Tab.Screen name="Projects" component={ProjectStackScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
