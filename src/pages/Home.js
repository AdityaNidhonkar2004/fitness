import React, { useState } from "react";

import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercise from "../components/SearchExercise";
import Exercises from "../components/Exercises";
import PassSection from "../components/PassSection";
const Home = () => {
  const [bodyPart, setbodyPart] = useState("all");
  const [exercises, setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner />
      <PassSection />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setbodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  );
};

export default Home;
