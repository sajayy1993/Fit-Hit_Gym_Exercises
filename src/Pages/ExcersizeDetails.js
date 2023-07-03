import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Details from '../Components/Details'
import ExerciseVideos from '../Components/ExerciseVideos'
import SimilerExercise from '../Components/SimilerExercise'
import { useParams } from 'react-router-dom'
import { exerciseOptions, fetchData, youtubeOptions } from '../Utils/fetchData'


const ExcersizeDetails = () => {

  const [ exersiceDetail, setExersiceDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([])
  const [targetMuscleData, setTargetMuscleData]= useState([])
  const [equipmentData, setEquipmentData] = useState([])

  const {id} = useParams()

  useEffect(()=>{

    const fetchExercisesData= async()=>{
       
      const exerciseDbUrl=  'https://exercisedb.p.rapidapi.com';
      const youtubeSearchUrl ='https://youtube-search-and-download.p.rapidapi.com';

      const exerciseDeatilsData= await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions)
 
      setExersiceDetail(exerciseDeatilsData)

      const exerciseVedioData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDeatilsData.name}`, youtubeOptions)

      setExerciseVideos( exerciseVedioData.contents)
      
    const targetMuscleExerciseData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDeatilsData.target}`, exerciseOptions)

    setTargetMuscleData(targetMuscleExerciseData)

    const equipmentExerciseData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDeatilsData.equipment}`, exerciseOptions)
     
    setEquipmentData(equipmentExerciseData)
    }


    fetchExercisesData( );
  },[id])

  return (
   <Box>
    <Details exersiceDetail={exersiceDetail}/>
    <ExerciseVideos exerciseVideos={exerciseVideos} name={exersiceDetail.name}/>
    <SimilerExercise equipmentData={equipmentData} targetMuscleData={targetMuscleData} />
   </Box>
  )
}

export default ExcersizeDetails