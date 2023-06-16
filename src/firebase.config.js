
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA_nPkb-xUWE8SzQHM74HvobGnml-uhJ5A",
  authDomain: "multimart-e1537.firebaseapp.com",
  projectId: "multimart-e1537",
  storageBucket: "multimart-e1537.appspot.com",
  messagingSenderId: "298791435410",
  appId: "1:298791435410:web:9908bd508060aebb04ba4b",
  measurementId: "G-MTN3VTH0PJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export default app;