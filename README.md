# Galarm

This repository contains the **backend** and **React Native mobile client** for a group alarm application.

## Backend

The `backend` folder hosts a Node.js + Express server connected to MongoDB. It supports:
- user signup
- group creation and invitation flows
- adding alarms to groups

### Running the backend
```bash
cd backend
npm install
MONGODB_URI="mongodb://localhost:27017/galarm" npm start
```
Adjust `MONGODB_URI` to point to your MongoDB instance.

## Mobile

The `mobile` folder contains a React Native client using Redux Toolkit, React Navigation, and react-native-paper for a Material You UI.

### Running the mobile app
```bash
cd mobile
npm install
npm run android # or npm run ios
```

Building an APK requires the Android SDK:
```bash
cd mobile/android
./gradlew assembleRelease
```
Upload the generated APK (located under `android/app/build/outputs/apk/release/`) to your preferred hosting or GitHub releases.
