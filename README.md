# RN-Animation
A simple Tinder-like card stack built using React Native’s Animated API and PanResponder to demonstrate gesture handling and swipe animations.

# Swipeable Cards Stack – React Native

This project demonstrates a **stacked swipeable cards UI** built with **React Native and TypeScript**, inspired by Tinder-style interactions.  
It is created to showcase the working of **Animated API**, **PanResponder**, and basic gesture-based animations.

## ✨ Features

- Stacked cards UI
- Swipe cards left or right using gestures
- Smooth swipe and rotation animations
- Callback support for left and right swipe actions
- Displays a fallback UI when no cards are left
- Clean separation of logic and UI using reusable components

## 🛠️ Tech Stack

- React Native
- TypeScript
- Animated API
- PanResponder
- LayoutAnimation

## 📂 Project Structure
├── App.tsx

├── CardComp.tsx


- **App.tsx**
  - Provides card data
  - Handles rendering of cards and "no more cards" view
  - Receives swipe callbacks

- **CardComp.tsx**
  - Core swipe logic
  - Gesture handling using PanResponder
  - Card animation using Animated API
  - Stack management and swipe thresholds

## 🚀 How It Works

1. Cards are stacked on top of each other.
2. The top card listens to pan gestures.
3. Based on swipe distance:
   - Swipes right → triggers `onSwipeRight`
   - Swipes left → triggers `onSwipeLeft`
4. If the swipe threshold is not met, the card smoothly resets.
5. Once all cards are swiped, a fallback view is shown.

## 📸 Preview

> Swipe cards left or right until the stack ends and a “You ran out of cards!” message appears.

## 📌 Purpose

This project is built as a **learning and demonstration feature** to understand:
- Gesture handling in React Native
- Animation orchestration using Animated API
- Building reusable UI components

## 📄 License

MIT


