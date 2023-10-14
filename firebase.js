        // Import the necessary Firebase SDK functions
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
        import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
        import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
        import { getFirestore, doc, setDoc, collection } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-firestore.js"; // Import collection function
    
    // Firebase configuration
    const firebaseConfig = {
        apiKey: "AIzaSyDcsBZNHToafJxvAAkQ2y6bB74bPku-sAE",
        authDomain: "singnup.firebaseapp.com",
        projectId: "singnup",
        storageBucket: "singnup.appspot.com",
        messagingSenderId: "971102741934",
        appId: "1:971102741934:web:9b556defb7efce4051143f",
        measurementId: "G-3ENVSFEC3C"
      };
       

          // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const db = getFirestore(app);
