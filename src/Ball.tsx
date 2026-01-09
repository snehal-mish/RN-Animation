import { View, StyleSheet } from "react-native";

const Ball = () => {
  return <View style={styles.ball} />;
};

export default Ball;

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  ball: {
    height: 50,
    width: 50,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: "black",
    marginLeft: 10,
    marginTop: 10,
  },
});
