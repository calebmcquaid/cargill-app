import React, { useEffect } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore/lite";
import Person from "../../components/Icons/Person";
import RightChevron from "../../components/Icons/RightChevron";
// eslint-disable-next-line import/extensions
import { COLORS } from "../../project.config";
import styles from "./styles";
import app, { firestore } from "../../config/firebase";

const auth = getAuth();

const Account: React.FC<StackScreenProps<any>> = ({ navigation }) => {
  const [favoritedItems, setFavoritedItems] = React.useState(0);
  const [completedBrands, setCompletedBrands] = React.useState(0);
  const [notes, setNotes] = React.useState(0);
  const [position, setPosition] = React.useState("Position");
  const { currentUser } = getAuth(app);

  useEffect(() => {
    const getData = async () => {
      const docRef = doc(firestore, "users", currentUser?.email as string);
      const docSnap = await getDoc(docRef);
      setPosition(docSnap.data()?.position);
      setFavoritedItems(docSnap.data()?.favorites?.length || 0);
      setNotes(docSnap.data()?.notes?.length || 0);
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

  const completedBrandsPercentage = Math.round((completedBrands / 3) * 100);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={{ uri: auth.currentUser?.photoURL as string }}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={styles.greetingContainer}>
          <Text style={styles.accountGreeting}>
            Hello, {currentUser?.email}
          </Text>
          <Text style={styles.styledText}>{position}</Text>
        </View>
        <View>
          <View style={styles.progressBarBackground}>
            <View
              style={{
                width: `${completedBrandsPercentage}%`,
                backgroundColor: COLORS.primary,
                height: 5,
              }}
            />
          </View>
        </View>
        <View style={styles.countContainer}>
          <Text style={styles.courseCompletedCount}>{completedBrands}/3</Text>
          <Text style={styles.courseCompleted}>brands completed</Text>
        </View>
        <View style={styles.categoriesContainer}>
          <View>
            <Text style={styles.countStyle}>{favoritedItems}</Text>
            <Text style={styles.white}>Favorited Items</Text>
          </View>
          <View>
            <Text style={styles.countStyle}>{notes}</Text>
            <Text style={styles.white}>Notes</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() =>
            navigation.navigate("AccountStack", { screen: "Settings" })
          }
        >
          <Person />
          <Text style={styles.profileSettings}>Profile Settings</Text>
          <RightChevron width={16} height={16} fill={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Account;
