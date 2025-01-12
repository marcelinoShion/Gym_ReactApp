import React,{ useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import {Box} from '@mui/material'
import {fetchData} from '../utils/fetchData'
import Detail from '../components/Detail'
import Error from '../components/Error'

const ExerciseDetail = () => {
  
  const {id} = useParams()
  
  const [exerciseDetail, setExerciseDetail] = useState({})
  const [loading, setLoading] = useState(true)

  const fetchExerciseData = async () =>{
    const exerciseDetailData = (await fetchData()).filter((exercise)=>{
      
      return exercise.exerciseId === id
    })
    
    setExerciseDetail(exerciseDetailData[0])
      
    setLoading(false)
    
     
    
    
  }
  
  useEffect(() => {
    
    fetchExerciseData()
    
  }, [id])
  
 
    return (
      <Box>
        {loading ? <Error/> :  <Detail exerciseDetail={exerciseDetail}/>}
       
      </Box>
      
    )
  
}

export default ExerciseDetail