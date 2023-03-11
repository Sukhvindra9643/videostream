import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCCNYCSFsR4GW0trlj3EMeCqFFAF9k8LUI",
  authDomain: "videostream-e6f9a.firebaseapp.com",
  projectId: "videostream-e6f9a",
  storageBucket: "videostream-e6f9a.appspot.com",
  messagingSenderId: "782222367209",
  appId: "1:782222367209:web:85a3d7360f0a75bd9b1378",
  measurementId: "G-V49CY2BPMJ",
  databaseUrl: "https://videostream-e6f9a-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
