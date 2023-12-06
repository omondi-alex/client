import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import Archives from "./components/Archives";
import { app } from "./firebase/config";
//import app from "./firebase/config";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);
  const [experiences, setExperiences] = useState(null);
  const db = getFirestore(app);

  useEffect(() => {
    const getWorks = async (db) => {
      try {
        const worksCol = collection(db, "works");
        const workSnapshot = await getDocs(worksCol);
        const worksList = workSnapshot.docs.map((doc) => doc.data());
        setData(worksList);
      } catch (error) {
        console.error("Error fetching works:", error);
      }
    };

    const getExperiences = async (db) => {
      try {
        const expCol = collection(db, "experiences");
        const expSnapshot = await getDocs(expCol);
        const experiencesList = expSnapshot.docs.map((doc) => doc.data());
        setExperiences(experiencesList);
      } catch (error) {
        console.error("Error fetching experiences:", error);
      }
    };

    getWorks(db);
    getExperiences(db);
  }, [db]);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            data={data ? data : []}
            experiences={experiences ? experiences : []}
          />
        }
      />
      <Route path="/archive" element={<Archives />} />
    </Routes>
  );
}

export default App;
