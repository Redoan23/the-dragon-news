// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBb_8GAi-M2mP4uSVsIhJb9OThJZQAJRtI",
  authDomain: "dragon-news-with-react-b6956.firebaseapp.com",
  projectId: "dragon-news-with-react-b6956",
  storageBucket: "dragon-news-with-react-b6956.appspot.com",
  messagingSenderId: "336604706287",
  appId: "1:336604706287:web:8b83f3be85890d2d37f21a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
export default auth;