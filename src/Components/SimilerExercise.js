import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import HorizontalScrollbar from './HorizontalScrollbar'
import Loader from './Loader'

const SimilerExercise = ({equipmentData,targetMuscleData}) => {
  return (
  <Box sx={{mt:{lg:'100px', xs:'0'}}}>
  <Typography variant='h4' mb={5}> Exercises that target the same <span style={{color:'#ff2625' ,textTransform:'capitalize'}}>Muscle group </span>  </Typography>
  <Stack direction='row' sx={{padding:'2', position:'relative'}}>
    {
        targetMuscleData.length ? <HorizontalScrollbar data={targetMuscleData}/>:<Loader/>
    }
  </Stack>
  <Typography variant='h4'  mb={5} mt={5}> Exercises that use the same <span style={{color:'#ff2625' ,textTransform:'capitalize'}}> Equipment </span></Typography>
  <Stack direction='row' sx={{padding:'2', position:'relative'}}>
    {
        equipmentData.length ? <HorizontalScrollbar data={equipmentData}/>:<Loader/>
    }
  </Stack>

  </Box>
  )
}

export default SimilerExercise