import React, { useEffect, useState  } from 'react';
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
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { addProduct, deleteProduct, fetchProduct } from '../../redux/action/Product.action';
import { useDispatch, useSelector } from 'react-redux';

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

function Product() {
    const [open, setOpen] = useState(false)
    const [dOpen , setdOpen] = useState(false)
    const [id , setId] = useState()
    const [updateData,setUpdateData] = useState();

    const dispatch = useDispatch()

    useEffect (
        () => {
            dispatch(fetchProduct())
        },
    [])

    const product = useSelector(state => state.product);
    console.log(product);

    const handleEdit = (id) => {
        // let filterData = localdata.filter((e) => e.id === id)
        let filterData = product.product.filter((l) => l.id === id)
        setOpen(true)
        setUpdateData(filterData[0])
    }

    const handleDelete = () => {
        dispatch(deleteProduct(id))
        handleClose()
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
                    <AddProduct open={open} handleClose={handleClose} />
                </Box>
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow >
                                <TableCell>
                                    <h4>Email</h4>
                                </TableCell>
                                <TableCell align="center">
                                    <h4>First Name</h4>
                                </TableCell>
                                <TableCell align="center">
                                    <h4>Last Name</h4>
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
                            {product.product.map((row , i) => (
                                <TableRow
                                    key={i}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <h6>{row.email}</h6>
                                    </TableCell>
                                    <TableCell align="center">
                                        <h6>{row.first_name}</h6>
                                    </TableCell>
                                    <TableCell align="center">
                                        <h6>{row.last_name}</h6>
                                    </TableCell>
                                    <TableCell align="center">
                                        <IconButton aria-label="edit" color="primary" onClick={() => handleEdit(row.id)}>
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