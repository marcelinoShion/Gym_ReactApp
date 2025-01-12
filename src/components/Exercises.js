import React,{useEffect,useState} from 'react';
import Pagination from '@mui/material/Pagination';
import {Box , Stack ,Typography} from '@mui/material';
import {fetchData} from '../utils/fetchData';
import ExercisesCard from './ExercisesCard';

const Exercises = ({exercises , setExercises,bodyPart}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 3
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise)

  const paginate =(e,value)=>{
    setCurrentPage(value)
    window.scrollTo({top:'1800px',behavior:'smooth'})
  }
  useEffect(() => {
    const fetchExercisesData = async()=>{
      let exerciseData = []
      if(bodyPart === 'all'){
        exerciseData = await fetchData();
      }else{
        exerciseData = (await fetchData()).filter((e)=>{
          return e.bodyParts[0] == bodyPart
        })
      }
      setExercises(exerciseData);
    }
    fetchExercisesData()
  }, [bodyPart])
  return (
    <Box id="exercises"
      sx={{mt:{lg:'110px'}}}
      mt={'50px'}
      p={'20px'}
    >
      <Typography variant='h3' mb={'46px'}>
        Showing results
      </Typography>
      <Stack direction={'row'} sx={{gap:{lg:'110px',xs:'50px'}}}
      flexWrap={'wrap'} justifyContent={'center'}>
        {currentExercises.map((exercise,index)=>{
          return <ExercisesCard key={index} exercise={exercise}/>
        })}
      </Stack>
      <Stack mt={'100px'} alignItems={'center'}>
        {exercises.length > exercisesPerPage &&(
          <Pagination
          color={'standard'} shape={'rounded'} defaultPage={1}
          count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size={'large'}
          />
        )}
      </Stack>
    </Box>
  )
}

export default Exercises