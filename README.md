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

# Project Setup

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
