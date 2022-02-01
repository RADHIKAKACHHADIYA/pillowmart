import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Button, ImageList, ImageListItem, Typography } from '@mui/material';
import AddProduct from './AddProduct';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';


const productData = [
    {
        id: 101,
        name: 'Cervical pillow for airplane car office nap pillow',
        imgPath: 'assets/img/product/p10.png',
        price: 5
    },
    {
        id: 102,
        name: 'Geometric striped flower home classy decor',
        imgPath: 'assets/img/product/p1.png',
        price: 14
    },
    {
        id: 103,
        name: 'Foam filling cotton slow rebound pillows',
        imgPath: 'assets/img/product/p2.png',
        price: 15
    },
    {
        id: 104,
        name: 'Memory foam filling cotton Slow rebound pillows',
        imgPath: 'assets/img/product/p3.png',
        price: 12
    },
    {
        id: 105,
        name: 'Memory foam filling cotton Slow rebound pillows',
        imgPath: 'assets/img/product/p4.png',
        price: 11
    },
        {
            id: 106,
            imgPath: 'assets/img/product/p5.png',
            name: 'Sleeping orthopedic sciatica Back Hip Joint Pain relief',
            price: 23
        },
        {
            id: 107,
            imgPath: 'assets/img/product/p6.png',
            name: 'Memory foam filling cotton Slow rebound pillows',
            price: 17
        },
        {
            id: 108,
            name: 'Foam filling cotton slow rebound pillows',
            imgPath: 'assets/img/product/p7.png',
            price: 18
        },
        {
            id: 109,
            imgPath: 'assets/img/product/p8.png',
            name: 'Geometric striped flower home classy decor',
            price: 22
        },
        {
            id: 110,
            imgPath: 'assets/img/product/p9.png',
            name: 'Geometric striped flower home classy decor',
            price: 21
        }
]

function Product(props) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])

    useEffect(
        () => {
            loadData()

        },
        [])

    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("product"))
        if (localdata === null) {
            localdata = productData
            localStorage.setItem("product" , JSON.stringify(productData))
            
        } else {
           localdata =localdata
        }
        setData(localdata)
    }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


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
                        className='button mb-5 '
                        variant="contained"
                        onClick={handleClickOpen}
                    >
                        Add Product
                    </Button>
                    <AddProduct open={open} handleClose={handleClose} loadData={loadData} />
                </Box>
                {/* <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product Name</TableCell>
                                <TableCell align="center">Product img   </TableCell>
                                <TableCell align="center">Product price</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">
                                    {row.price}
                                </TableCell>
                                <TableCell align="center">
                                    {row.imgPath}
                                </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer> */}

                {
                    data.map((row) => (
                        <Card sx={{ maxWidth: 345 }}>
                                        <img
                                            src={row.imgPath}
                                            loading="lazy"
                                        />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {row.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" >
                                    <h4>${row.price}</h4>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }

            </Box>
        </div>
    );
}

export default Product;