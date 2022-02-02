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
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

// import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
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
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function Product(props) {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [dOpen , setdOpen] = useState(false)
    const [id , setId] = useState()

    useEffect(
        () => {
            loadData()
        },
        [])

    const loadData = () => {
        let localdata = JSON.parse(localStorage.getItem("product"))
        if (localdata === null) {
            localdata = productData
            localStorage.setItem("product", JSON.stringify(productData))

        } else {
            localdata = localdata
        }
        setData(localdata)
    }

    const handleDelete = () => {
        let localdata = JSON.parse(localStorage.getItem("product"))
        
        const fData = localdata.filter((d)=> d.id !== id)
        localStorage.setItem("product" , JSON.stringify(fData))

        setdOpen(fData)
        setData(fData)
        handleClose();
       
     }
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setdOpen(false);
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
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell>
                                    <h4>PRODUCT NAME</h4>
                                </TableCell>
                                <TableCell align="center">
                                    <h4>PRODUCT PRICE</h4>
                                </TableCell>
                                <TableCell align="center">
                                    <h4>EDIT</h4>
                                </TableCell>
                                <TableCell
                                    align="center"
                                >
                                    <h4>DELETE</h4>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data.map((row , i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <h6>{row.name}</h6>
                                    </TableCell>
                                    <TableCell align="center">
                                        <h6>${row.price}</h6>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="edit" color="primary" >
                                            <EditIcon />
                                        </IconButton>
                                    </TableCell>
                                    <TableCell align="center"  >
                                        <IconButton sx={{ color: ' #dc3545' }}
                                            aria-label="delete"
                                            onClick={() => { setdOpen(true);  setId(row.id)}}>
                                                
                                            <DeleteIcon />
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Dialog
                    open={dOpen}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={handleClose}
                >
                    <DialogTitle>{"Are you sure want to delete?"}</DialogTitle>
                    <DialogActions>
                        <Button onClick={handleClose}>No</Button>
                        <Button onClick={handleDelete}>Yes</Button>
                    </DialogActions>
                </Dialog>

                {/* {
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
                } */}

            </Box >
        </div >
    );
}

export default Product;