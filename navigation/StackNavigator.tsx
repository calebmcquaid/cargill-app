import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import CourseDetails from "../components/Courses/CourseDetails";
import ResearchPage from "../components/Courses/ResearchPage";
import FAQQuestion from "../components/FAQQuestion";
import FAQSection from "../components/FAQSection";
import FavoritesSection from "../components/FavoritesSection";
import NewNote from "../components/Notes/NewNote";
import CoursesPage from "../pages/Courses";
import Dashboard from "../pages/Dashboard";
import FAQs from "../pages/FAQ";
import Favorites from "../pages/Favorites";

const Stack = createStackNavigator();

const DashboardStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}
        component={Dashboard}
      />
    </Stack.Navigator>
  );
};

const CoursesStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Courses"
        options={{ headerShown: false }}
        component={CoursesPage}
      />
      <Stack.Screen
        name="CourseDetails"
        options={{ headerShown: false }}
        component={CourseDetails}
      />
      <Stack.Screen
        name="ResearchPage"
        options={{ headerShown: false }}
        component={ResearchPage}
      />

      <Stack.Screen
        name="Notes"
        options={{ headerShown: false }}
        component={NewNote}
      />
    </Stack.Navigator>
  );
};

const FavoritesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorites"
        component={Favorites}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FavoritesSection"
        component={FavoritesSection}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

const FAQStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FAQs" component={FAQs} />
      <Stack.Screen name="FAQSection" component={FAQSection} />
      <Stack.Screen name="FAQQuestion" component={FAQQuestion} />
    </Stack.Navigator>
  );
};

export {
  DashboardStackNavigator,
  CoursesStackNavigator,
  FavoritesStack,
  FAQStack,
};
