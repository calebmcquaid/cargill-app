/* eslint-disable import/extensions */
import { doc, getDoc } from "firebase/firestore/lite";
import React, { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { auth, firestore } from "../../config/firebase";
import { TABLET_TYPOGRAPHY, TYPOGRAPHY } from "../../project.config";
import Card from "../Card";
import FavoritesCard, { FavoritesDataType } from "../FavoritesCard";
import styles from "./styles";
import COURSE_DATA from "./utils";

export const DUMMY_FAVORITE_DATA: FavoritesDataType[] = [
  {
    uid: "1huiohsodifh",
    date: "1658411224000",
    type: "media",
    courseId: "oneTrak",
    sectionId: "Overview",
    chapterId: "What is OneTrak?",
    mediaFile: "",
    noteId: null,
  },
  {
    uid: "1huiohsodifh",
    date: "1658324824000",
    type: "chapter",
    courseId: "oneTrak",
    sectionId: "Rumen Health",
    chapterId: "Acidosis impact",
    mediaFile: null,
    noteId: null,
  },
];

const HomePage = () => {
  const { currentUser } = auth;
  const [completedBrands, setCompletedBrands] = React.useState(0);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(
        firestore,
        "users",
        auth?.currentUser?.email as string
      );
      const docSnap = await getDoc(docRef);
      if (docSnap.data()?.courseOneProgress === 100) {
        setCompletedBrands(completedBrands + 1);
      }
      if (docSnap.data()?.courseTwoProgress === 100) {
        setCompletedBrands(completedBrands + 1);
      }
      if (docSnap.data()?.courseThreeProgress === 100) {
        setCompletedBrands(completedBrands + 1);
      }
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dimensions = Dimensions.get("window");
  const isTablet = dimensions.width >= 768;

  return (
    <ScrollView>
      <View style={styles.mainContainer}>
        <Text
          style={{
            ...(isTablet ? TABLET_TYPOGRAPHY.h1 : TYPOGRAPHY.h1),
            fontWeight: "700",
          }}
        >
          Welcome back,
        </Text>
        <Text
          style={{
            ...(isTablet ? TABLET_TYPOGRAPHY.h1 : TYPOGRAPHY.h1),
            fontWeight: "700",
          }}
        >
          {currentUser?.email}
        </Text>
        <View>
          <Text
            style={{
              ...TABLET_TYPOGRAPHY.h3,
              fontWeight: "500",
              marginTop: 19,
              marginBottom: 34,
            }}
          >
            {completedBrands}/3 brands completed{" "}
          </Text>
        </View>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.continueLearning}>Continue Learning</Text>
        </TouchableOpacity>
        <View style={styles.flexContainer}>
          <Text style={styles.titleText}>My Courses</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>See all</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal>
          <View style={styles.container}>
            {COURSE_DATA.map((course) => {
              // eslint-disable-next-line react/jsx-props-no-spreading
              return <Card {...course} key={course.id} />;
            })}
          </View>
        </ScrollView>
        <View style={styles.flexContainer}>
          <Text style={styles.titleText}>My Favorites</Text>
          <View>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See all</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView horizontal>
          <View style={styles.container}>
            {DUMMY_FAVORITE_DATA?.map((favorite) => (
              <FavoritesCard
                hasHeader
                favorite={favorite}
                key={favorite.uid + favorite.date}
              />
            ))}
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default HomePage;
