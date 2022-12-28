import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const SingleBooking = ({booking}) => {
    console.log(booking)

    const {_id,updatedAt,totalSeats,seats,name,fare,departureTime,departureLocation,createdAt,category,arrivalLocation,arrivalTime} = booking
    return (
        <Box>
            <Box sx={{display:"flex",justifyContent:"center",my:"20px",backgroundColor:"#ffffff",width:"57.96%",mx:"auto"}}>
                <Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",backgroundColor:"#0a09090f"}}>Operator (Bus Type)</Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",color:"#333"}}>
                        <Typography sx={{color:"#089D49" ,fontWeight:"600",fontSize:"17px"}}>{name}</Typography>
                        <Typography sx={{fontSize:"14px"}}>1, VOLVO, {category}</Typography>
                        <Typography sx={{fontSize:"14px"}}>Route: {arrivalLocation} - {departureLocation}</Typography>
                        <Typography sx={{fontSize:"14px"}}>Starting Point: {arrivalLocation}</Typography>
                        <Typography sx={{fontSize:"14px"}}>Ending Point: {departureLocation}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",backgroundColor:"#0a09090f"}}>Dep.Time</Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"15px"}}>
                        <Typography sx={{color:"#333333" ,fontSize:"15px"}}>{departureTime}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",backgroundColor:"#0a09090f"}}>Arr.Time</Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"15px"}}>
                        <Typography sx={{color:"#333333" ,fontSize:"15px"}}>{arrivalTime}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",backgroundColor:"#0a09090f"}}>Seats Available</Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"15px"}}>
                        <Typography sx={{color:"#333333" ,fontSize:"15px"}}>{seats.length}</Typography>
                    </Box>
                </Box>
                <Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"10px",backgroundColor:"#0a09090f"}}>Fare</Box>
                    <Box sx={{fontSize:"15px",fontWeight:600,px:"30px",py:"15px",}}>
                        <Typography sx={{color:"#089D49",fontSize:"20px"}}>৳ {fare}</Typography>
                        <Button sx={{backgroundColor:'#089D49',color:"white",fontSize:"12px",mt:"40px", 
                        ":hover":{
                            background:"#000000",
                            transition:"all 0.5s"
                        }}}>View Seats</Button>
                    </Box>
                </Box>
            </Box>
            
        </Box>
    );
};

export default SingleBooking;