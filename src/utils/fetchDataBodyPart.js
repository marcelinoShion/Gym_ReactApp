export const fetchDataBodyPart = async()=>{
    const response = await[
        {
            "bodyParts": [
              "chest"
            ]
          },
        {
            "bodyParts": [
              "legs"
            ],
        },
        {
            "bodyParts": [
              "glutes"
            ],
        }
        ]
    const data = response;
    return data ;

    }