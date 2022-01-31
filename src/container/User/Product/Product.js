import React from 'react';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';
import { borderColor } from '@mui/system';


const productData = [
    {
        id : 101 ,
        name : 'Cervical pillow for airplane car office nap pillow',
        Price : 5
    },
    {
        id : 102 ,
        name :'Geometric striped flower home classy decor',
        Price : 14
    }, 
    {
        id : 103 ,
        name :'Foam filling cotton slow rebound pillows',
        Price : 15
    }, 
    {
        id : 104 ,
        name : 'Memory foam filling cotton Slow rebound pillows',
        Price : 12 
    },
    {
        id : 105 ,
        name : 'Memory foam filling cotton Slow rebound pillows',
        Price : 11
    },
    {
        id : 106 ,
        name : 'Sleeping orthopedic sciatica Back Hip Joint Pain relief',
        Price : 23
    },
    {
        id : 107 ,
        name :'Memory foam filling cotton Slow rebound pillows',
        Price : 17
    }, 
    {
        id : 108 ,
        name :'Foam filling cotton slow rebound pillows',
        Price : 18
    }, 
    {
        id : 109 ,
        name : 'Geometric striped flower home classy decor',
        Price : 22
    },
    {
        id : 110 ,
        name : 'Geometric striped flower home classy decor',
        Price : 21
    }
]

function Product(props) {

    
    const handleClickOpen = () => {
        
    }
    console.log(handleClickOpen)
    
    return (
        <div>
            <Box>
                <Typography variant="h2" >
                    Product
                </Typography>
                <Box sx={{
                    float: 'right'  
                }}>
                    <Button 
                        className='button'
                        variant="contained" 
                        onClick={handleClickOpen}
                    >
                        Add Medicine
                    </Button>


                    {/* <AddProduct /> */}
                </Box>
            </Box>
        </div>
    );
}

export default Product;