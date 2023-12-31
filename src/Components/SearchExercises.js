import {
  Box,
  Button,
  Stack,
  TextField,
  Typography,
  
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchData, exerciseOptions } from "../Utils/fetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
const [bodyParts,setBodyParts] = useState([])

useEffect(()=>{

  const fetchExercisesData = async()=>{
    const bodyPartsData =  await fetchData( "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",exerciseOptions);

    setBodyParts (['all', ...bodyPartsData]);

  }

  fetchExercisesData();

},[])

  const handelSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );

      const SearchedExercises = exercisesData.filter((exercise) =>
        exercise.name.toLocaleLowerCase().includes(search) ||
        exercise.target.toLocaleLowerCase().includes(search)||
        exercise.equipment.toLocaleLowerCase().includes(search)||
        exercise.bodyPart.toLocaleLowerCase().includes(search)
      );

      setSearch('')
      setExercises(SearchedExercises)
    }
  };

  return (
    <Stack alignItems="center" mt="30px" justifyContent="center" padding="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br />
        Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
          placeholder="Search Exercises "
          type="text"
        ></TextField>
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handelSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position:'relative', width:'100%', padding:'20px'}}>
    <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
