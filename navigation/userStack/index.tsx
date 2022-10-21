/* eslint-disable import/extensions */
/* eslint-disable react/no-unstable-nested-components */
import React, { useEffect } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  View,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  Image,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getAuth, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import FAQs from "../../pages/FAQ";
import Account from "../../pages/Account";
import { Props } from "../../utils/types";
// @ts-ignore
import { COLORS } from "../../project.config.ts";
import CoursesIcon from "../../components/Icons/Courses";
import DashboardIcon from "../../components/Icons/Dashboard";
import StarIcon from "../../components/Icons/Star";
import Dashboard from "../../pages/Dashboard";
import DrawerDashboardIcon from "../../components/Icons/DrawerNavDashboard";
import FAQsIcon from "../../components/Icons/FAQs";
import Gear from "../../components/Icons/Gear";
import SignOutIcon from "../../components/Icons/SignOut";
import AccountStack from "../AccountStack";
import {
  CoursesStackNavigator,
  FAQStack,
  FavoritesStack,
} from "../StackNavigator";
import styles from "./styles";
import DrawerNavIcon from "../../components/Icons/DrawerNavIcon";
import { TABLET_TYPOGRAPHY } from "../../project.config";
import Search from "../../components/Search";
import SearchIcon from "../../components/Icons/Search";
import TabNavStar from "../../components/Icons/TabNavStar";
import app, { firestore } from "../../config/firebase";

const auth = getAuth();

const CustomDrawerContent: React.FC<Props> = () => {
  const navigation = useNavigation();
  const [position, setPosition] = React.useState("Position");

  const { currentUser } = getAuth(app);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(firestore, "users", currentUser?.email as string);
      const docSnap = await getDoc(docRef);
      setPosition(docSnap.data()?.position);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.background }}>
      <ScrollView style={{ marginLeft: 5, backgroundColor: COLORS.background }}>
        <TouchableOpacity
          style={{ marginTop: 80, marginBottom: 60 }}
          onPress={() => navigation.navigate("Account" as never)}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{ uri: auth.currentUser?.photoURL as string }}
              style={{
                width: 50,
                height: 50,
                marginLeft: 25,
                marginRight: 15,
                borderRadius: 5,
              }}
            />
            <View style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{
                  color: COLORS.pureWhite,
                  fontSize: 18,
                  marginBottom: 10,
                }}
              >
                {auth?.currentUser?.email}
              </Text>
              <Text style={{ color: COLORS.pureWhite, fontSize: 14 }}>
                {position}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.upperContainer} />
        <TouchableOpacity
          style={{
            marginTop: 80,
            marginLeft: 25,
          }}
          onPress={() => navigation.navigate("Dashboard" as never)}
        >
          <View style={styles.drawerView}>
            <DrawerDashboardIcon />
            <Text style={styles.drawerText}>Dashboard</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 35, marginLeft: 25 }}
          onPress={() => navigation.navigate("Courses" as never)}
        >
          <View style={styles.drawerView}>
            <CoursesIcon fill={COLORS.primary} />
            <Text style={styles.drawerText}>Brands</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 35, marginLeft: 23 }}
          onPress={() => navigation.navigate("Favorites" as never)}
        >
          <View style={styles.drawerView}>
            <StarIcon fill={COLORS.primary} width={22} height={20} />
            <Text
              style={{
                ...TABLET_TYPOGRAPHY.h2,
                fontWeight: "500",
                marginLeft: 9.5,
              }}
            >
              Favorites
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 35, marginLeft: 25 }}
          onPress={() => navigation.navigate("FAQs" as never)}
        >
          <View style={styles.drawerView}>
            <FAQsIcon />
            <Text style={styles.drawerText}>FAQs</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.lowerContainer} />
        <TouchableOpacity
          style={{ marginTop: 80, marginLeft: 25 }}
          onPress={() => navigation.navigate("Account" as never)}
        >
          <View style={styles.drawerView}>
            <Gear />
            <Text style={styles.drawerText}>Account</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 35, marginBottom: 100, marginLeft: 25 }}
          onPress={() =>
            signOut(auth)
              .then(() => {
                console.log("Signed out");
              })
              .catch((error) => {
                console.log(error);
              })
          }
        >
          <View style={styles.drawerView}>
            <SignOutIcon />
            <Text style={styles.drawerText}>Logout</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC<Props> = () => {
  const dimensions = useWindowDimensions();
  const isTablet = dimensions.width >= 768;
  return (
    <Tab.Navigator
      screenOptions={() => ({
        tabBarStyle: {
          backgroundColor: "#A79E70",
          height: `${isTablet ? "8%" : "10%"}`,
          paddingLeft: `${isTablet ? "30%" : "15%"}`,
          paddingRight: `${isTablet ? "30%" : "15%"}`,
          paddingTop: `${isTablet ? "0%" : "4%"}`,
        },
      })}
    >
      <Tab.Screen
        name="Brands"
        component={CoursesStackNavigator}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            margin: 0,
            padding: 0,
          },
          tabBarLabel: () => {
            return null;
          },
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View>
              <CoursesIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabelStyle: {
            margin: 0,
            padding: 0,
          },
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View>
              <DashboardIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoritesStack}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            margin: 0,
            padding: 0,
          },
          tabBarLabel: () => {
            return null;
          },
          tabBarShowLabel: false,
          tabBarIcon: () => (
            <View>
              <TabNavStar fill={COLORS.pureWhite} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarButton: () => null,
          tabBarShowLabel: false,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="FAQs"
        component={FAQStack}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarButton: () => null,
          tabBarShowLabel: false,
          tabBarIcon: () => null,
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
          tabBarLabel: () => {
            return null;
          },
          tabBarButton: () => null,
          tabBarShowLabel: false,
          tabBarIcon: () => null,
        }}
      />
    </Tab.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const DrawerNavigator: React.FC<Props> = () => {
  return (
    <Drawer.Navigator
      id="DrawerNavigator"
      initialRouteName="Dashboard"
      drawerContent={() => <CustomDrawerContent navigation={undefined} />}
      screenOptions={({ navigation }) => ({
        headerTransparent: true,
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.toggleDrawer()}
            style={{ marginLeft: 20 }}
          >
            <DrawerNavIcon />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Search" as never)}
            style={{ marginRight: 20 }}
          >
            <SearchIcon />
          </TouchableOpacity>
        ),
      })}
    >
      <Drawer.Screen
        name="Dashboard"
        options={{
          title: "",
          headerStyle: styles.drawerHeaderStyle,
          headerTintColor: COLORS.pureWhite,
        }}
        component={TabNavigator}
      />
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: styles.drawerHeaderStyle,
          headerTintColor: COLORS.pureWhite,
        }}
        name="FAQs"
        component={FAQs}
      />
      <Drawer.Screen
        options={{
          title: "",
          headerStyle: styles.drawerHeaderStyle,
          headerTintColor: COLORS.pureWhite,
        }}
        name="AccountStack"
        component={AccountStack}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
