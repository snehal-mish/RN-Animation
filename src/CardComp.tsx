import { useState, useEffect, useRef, JSX } from "react";
import {
  StyleSheet,
  Animated,
  PanResponder,
  Dimensions,
  LayoutAnimation,
  UIManager,
  PanResponderGestureState,
  GestureResponderEvent,
} from "react-native";

// ---------------- TYPES ----------------

interface User {
  id: number;
  name: string;
  avatar: string;
}

// CardComp Props
interface CardCompProps {
  data: User[];
  renderCard: (item: User) => JSX.Element;
  renderNoMoreCard: () => JSX.Element;
  onSwipeLeft: (itemIndex: number) => void;
  onSwipeRight: (itemIndex: number) => void;
}

// ---------------- CONSTANTS ----------------

const SCREEN_WIDTH = Dimensions.get("window").width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

// ---------------- COMPONENT ----------------

const CardComp = ({
  data,
  renderCard,
  renderNoMoreCard,
  onSwipeLeft,
  onSwipeRight,
}: CardCompProps) => {
  // Animated value (must be stable)
  const position = useRef(new Animated.ValueXY()).current;

  // PanResponder
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (
        _event: GestureResponderEvent,
        gesture: PanResponderGestureState
      ) => {
        position.setValue({
          x: gesture.dx,
          y: gesture.dy,
        });
      },
      onPanResponderRelease: (
        _event: GestureResponderEvent,
        gesture: PanResponderGestureState
      ) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          forceSwipe("right");
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          forceSwipe("left");
        } else {
          resetPosition();
        }
      },
    })
  ).current;

  // State
  const [index, setIndex] = useState<number>(0);
  const prevData = useRef<User[]>(data);

  // ---------------- EFFECTS ----------------

  useEffect(() => {
    if (UIManager.setLayoutAnimationEnabledExperimental) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();
  }, [data]);

  useEffect(() => {
    if (prevData.current !== data) {
      setIndex(0);
      prevData.current = data;
    }
  }, [data]);

  // ---------------- FUNCTIONS ----------------

  const forceSwipe = (direction: "left" | "right") => {
    const x = direction === "right" ? SCREEN_WIDTH : -SCREEN_WIDTH;

    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  };

  const onSwipeComplete = (direction: "left" | "right") => {
    direction === "right" ? onSwipeRight(index) : onSwipeLeft(index);
    position.setValue({ x: 0, y: 0 });
    setIndex((prev) => prev + 1);
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 1.5, 0, SCREEN_WIDTH * 1.5],
      outputRange: ["-120deg", "0deg", "120deg"],
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }],
    };
  };

  // ---------------- RENDER ----------------

  if (index >= data.length) {
    return renderNoMoreCard();
  }

  return data
    .map((item, ind) => {
      if (ind < index) return null;

      if (ind === index) {
        return (
          <Animated.View
            key={item.id}
            style={[getCardStyle(), styles.cardStyle]}
            {...panResponder.panHandlers}
          >
            {renderCard(item)}
          </Animated.View>
        );
      }

      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 10 * (ind - index) }]}
        >
          {renderCard(item)}
        </Animated.View>
      );
    })
    .reverse();
};

export default CardComp;

// ---------------- STYLES ----------------

const styles = StyleSheet.create({
  cardStyle: {
    position: "absolute",
    width: SCREEN_WIDTH,
  },
});
