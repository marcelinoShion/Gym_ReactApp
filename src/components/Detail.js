import React from 'react'
import { Typography,Stack ,Button } from '@mui/material'

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

const Detail = ({exerciseDetail}) => {
    const extraDetail = [
        {
            icon:BodyPartImage,
            name:exerciseDetail.bodyParts[0]
        },
        {
            icon:TargetImage,
            name:exerciseDetail.targetMuscles[0]
        },
        {
            icon:EquipmentImage,
            name:exerciseDetail.equipments[0]
        },
    ]
  return (
    <Stack gap={'60px'} sx={{flexDirection:{lg:'row'},p:'20px',alignItems:'center'}} >
        <img src={exerciseDetail.gifUrl} alt={exerciseDetail.name}  loading={'lazy'} className='detail-image'/>
        <Stack sx={{gap:{lg:'35px',xs:'20px'}}}>
            <Typography variant='h3' textTransform={'capitalize'}>
                {exerciseDetail.name}
            </Typography>
            <Typography variant='h6'>
                Exercises keep you strong. {exerciseDetail.name.split('').map((char,index)=>{
                    return index === 0? char.toUpperCase() : char
                }).join('')} {'  '}
                is one of the best
                exercises target your {exerciseDetail.targetMuscles[0]}. it will help improve your mood and gain energy.
            </Typography>
            {extraDetail.map((item)=>{
                return <Stack key={item.name} direction={'row'} gap={'24px'} alignItems={'center'}>
                    <Button sx={{background:'#fff2db',borderRadius:'50%',width:'100px',height:'100px'}}>
                        <img src={item.icon} alt={item.name} style={{width:'50px',height:'50px'}}/>
                    </Button>
                    <Typography textTransform={'capitalize'} variant='h5'>
                        {item.name}
                    </Typography>
                </Stack>
            })}
        </Stack>
    </Stack>
  )
}

export default Detail