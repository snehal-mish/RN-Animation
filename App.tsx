import { StyleSheet, View, Image, Text } from "react-native";
import CardComp from "./src/CardComp";
import { JSX } from "react";

// ---------------- TYPES ----------------

interface User {
  id: number;
  name: string;
  avatar: string;
}

// ---------------- DATA ----------------

const users: User[] = [
  {
    id: 1,
    name: "Card 1",
    avatar: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Card 2",
    avatar: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Card 3",
    avatar: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Card 4",
    avatar: "https://picsum.photos/200/300",
  },
];

// ---------------- COMPONENT ----------------

function App() {
  const renderCard = (item: User): JSX.Element => {
    return (
      <View style={styles.cardContainer}>
        <Image source={{ uri: item.avatar }} style={styles.image} />
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{item.name}</Text>
        </View>
      </View>
    );
  };

  const renderNoMoreCard = (): JSX.Element => {
    return (
      <View style={styles.noMoreCardContainer}>
        <Text style={styles.header}>You ran out of cards!!</Text>
      </View>
    );
  };

  return (
    <CardComp
      data={users}
      renderCard={renderCard}
      renderNoMoreCard={renderNoMoreCard}
      onSwipeLeft={() => {
        console.log("Left Swipe");
      }}
      onSwipeRight={() => {
        console.log("Right Swipe");
      }}
    />
  );
}

export default App;

// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500,
  },
  noMoreCardContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    padding: 25,
  },
  cardContainer: {
    width: 200,
    height: 200,
    borderWidth: 2,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
  },
  image: {
    height: 150,
    width: 196,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 8,
  },
  headerContainer: {
    backgroundColor: "white",
    width: "100%",
    height: 40,
  },
  header: {
    fontSize: 20,
    fontWeight: "900", 
    alignSelf: "center",
  },
});
