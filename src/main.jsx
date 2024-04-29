import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBzufPKyt8bRLPvTj_2kUYqpfr9O1nON7k",
  authDomain: "coder-geremias.firebaseapp.com",
  projectId: "coder-geremias",
  storageBucket: "coder-geremias.appspot.com",
  messagingSenderId: "589034310174",
  appId: "1:589034310174:web:693ea9cd4b28e157a6bc0f",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
