import React from "react";
import { View, StyleSheet, Image, Dimensions } from "react-native";
import { CustomText } from "../components/CustomText";
import StarRating from "react-native-star-rating";
import { COLORS } from "../style/colors";

const defaultImgUrl =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";

export const ReviewItem = ({
  username = "Banu",
  userImg = defaultImgUrl,
  rating = 4,
  comment = "I liked it.",
  date = "20 March 2020",
}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.userImg}
        source={{
          uri:
            "https://firebasestorage.googleapis.com/v0/b/banuapp-15de5.appspot.com/o/-MW-Cmp7DXhbNawbyYpK?alt=media&token=898174a5-1e8f-410f-8395-f3a3b4f5862b",
        }}
      />
      <CustomText style={styles.username} weight="medium">
        {username}
      </CustomText>
      <View style={styles.row}>
        <StarRating
          disabled={true}
          fullStarColor={COLORS.STAR}
          starSize={14}
          starStyle={{ margin: 3 }}
          maxStars={5}
          rating={rating}
        />
        <CustomText style={styles.date}>{date}</CustomText>
      </View>

      <CustomText> {comment}</CustomText>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.DARK,
    borderRadius: 8,
    width: Dimensions.get("window").width - 64,
    padding: 20,
    margin: 16,
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  username: {
    fontSize: 14,
  },
  userImg: {
    width: 32,
    height: 32,
    borderRadius: 16,
    position: "absolute",
    left: -16,
    top: -16,
  },

  date: {
    fontSize: 11,
    color: COLORS.GRAY,
  },
});
