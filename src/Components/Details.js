import {  Button, Stack, Typography } from '@mui/material';
import React from 'react'
import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Details = ({exersiceDetail}) => {
 
    const {bodyPart, gifUrl, name, equipment, target} = exersiceDetail;

    const extraDetails=[
        {
            icon:BodyPartImage,
            name:bodyPart
        },
        {
            icon:TargetImage,
            name:target
        }, {
            icon:EquipmentImage,
            name:equipment
        }]
  return (
  <Stack gap='60px' sx={{flexDirection:{lg:'row', padding:'20px', alignItems:'center'}}}>
  <img src={gifUrl} alt={name} Loading='lazy' className='detail-image'/>
  <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
  <Typography variant='h4' textTransform='capitalize'>
    {name}
  </Typography>
  <Typography variant='h6'>
    Exercises keep you strong. <span style={{color:'red', textTransform:'capitalize'}}>  {name}</span> {' '}
 is one of the best exercises to target your <span style={{color:'red', textTransform:'capitalize'}}> {target}</span> . 
    It will help you improve your mood and gain energy.
  </Typography>
{extraDetails.map((item)=>(
    <Stack key={item.name} direction='row' gap='24px' alignItems='center'>
    <Button sx={{background:'#fff2db', borderRadius:'50%', width:'100px', height:'100px'}}>
        <img src={item.icon} alt={bodyPart} style={{width:'50px', height:'50px'}}/>
    </Button>
    <Typography textTransform='capitalize' variant='h5'>
        {item.name}
    </Typography>

    </Stack>
))}
  </Stack>

  </Stack>
  )
}

export default Details