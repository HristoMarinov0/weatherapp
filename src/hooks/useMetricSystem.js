import { useState, useEffect } from "react";
import { setDoc, getDoc, doc } from "firebase/firestore";
import { db } from "../firebase-config";

const useMetricSystem = () => {
  const [metricSystem, setMetricSystem] = useState("");
  const [error, setError] = useState("");

  const fetchMetricSystem = async () => {
    try {
      const docRef = doc(db, "metricSystem", "preference");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists() && docSnap.data().preference) {
        setMetricSystem(docSnap.data().preference);
      } else {
        await setDoc(doc(db, "metricSystem", "preference"), {
          preference: "kelvin",
        });
        setMetricSystem("kelvin");
      }
    } catch (e) {
      console.error(e.message);
      setError(e.message);
    }
  };

  useEffect(() => {
    const updatePreference = async () => {
      try {
        await setDoc(doc(db, "metricSystem", "preference"), {
          preference: metricSystem,
        });
      } catch (e) {
        console.error(e);
        setError(e);
      }
    };
    if (!metricSystem) {
      fetchMetricSystem();
    } else {
      updatePreference();
    }
  }, [metricSystem]);

  return { metricSystem, setMetricSystem, error };
};

export default useMetricSystem;
