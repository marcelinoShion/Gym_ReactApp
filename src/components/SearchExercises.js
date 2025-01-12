import React,{useEffect,useState} from 'react'
import{Box, Button, Stack,TextField ,Typography} from '@mui/material'
import { fetchData } from '../utils/fetchData'
import { fetchDataBodyPart } from '../utils/fetchDataBodyPart'
import HorizontalScrollbar from './HorizontalScrollbar'

const SearchExercises = ({setExercises,bodyPart,setBodyPart}) => {
    const [search, setSearch] = useState('')
    
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
      const fetchExercisesData = async () =>{
        const bodyPartsData = (await fetchDataBodyPart()).map((e)=> e.bodyParts.flat());
        
        setBodyParts(bodyPartsData);
      }
      fetchExercisesData()
    }, [])



    const handleSearch = async () =>{
        if(search){
            const exercisesData = await fetchData();
            const searchedExercises = exercisesData.filter((exercise) => exercise.name.includes(search)
            ||exercise.targetMuscles.includes(search)
            ||exercise.equipments.includes(search)
            ||exercise.bodyParts.includes(search))
        setSearch('');
        setExercises(searchedExercises);
        }
    }

  return (
    <Stack alignItems={'center'} mt={'37px'} justifyContent={'center'} p={'20px'}>
        <Typography fontWeight={700} sx={{fontSize:{lg:'44px',xs:'30px'}}} mb={'50px'} textAlign={'center'}>
            Awesome Exercises You <br/> Should Know
        </Typography>
        <Box position={'relative'} mb={'72px'}>
            <TextField sx={{
                "& fieldset": { border: 'none' }, 
                width:{lg:'800px',xs:'350px'},
                    backgroundColor:'#fff'
                }} value={search} onChange={(e)=>{setSearch(e.target.value.toLowerCase())}} placeholder='Search Exercises' type='text'  
                InputProps={{style:{height:'76px',
                    fontWeight:'700',
                    borderRadius:'4px'}}} />
                <Button className='search-btn' sx={{
                    bgcolor:'#ff2625',
                    color:'#fff',
                    textTransform:'none',
                    width:{lg:'175px',xs:'80px'},
                    fontSize:{lg:'20px',xs:'14px'},
                    height:'56px',
                    position:'absolute',
                    right:'0'
                }}
                    onClick={handleSearch}
                >Search</Button>
        </Box>
        <Box sx={{position:'relative',width:'100%',p:'20px'}}>
                <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
        </Box>
    </Stack>
  )
}

export default SearchExercises