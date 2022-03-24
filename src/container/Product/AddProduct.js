import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, FormikProvider, useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct, fetchProduct } from '../../redux/action/Product.action';
import Product from './Product';



function AddProduct({ open, handleClose, loadData, edit }) {
    const [update, setUpdate] = useState()
    const dispatch = useDispatch()



    useEffect(
        () => {
            setUpdate(edit)
        },
        [edit])

    const product = useSelector(state => state.product);
    console.log(product.product)

    // const handleEdit = (value) => {
    //     let data = {
    //         "id" : update ? update.id : '' ,
    //         "name" : value.name , 
    //         "price" : parseInt(value.price) 
    //     }
    // }

    const handleAdd = (value) => {
        let data = {
            "id": Math.floor((Math.random() * 1000) + 1),
            ...value
        }

        dispatch(addProduct(data))
        handleClose()
    };

    let AddSchema = {
        name: yup.string().
            required("must be requir your name"),
        price: yup.number().
            required("must be requir your name"),
        price: yup.number().
            required("must be requir your name"),
    }

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: update ? update.name : "",
            price: parseInt(update ? update.price : ""),
            price: parseInt(update ? update.price : ""),
        },
        validationSchema: schema,
        onSubmit: (value) => {
            handleAdd(value)
        }
    });

    const { handleSubmit, errors, touched, handleChange, handleBlur, getFieldProps } = formik;

    return (
        <div>
            <Product product={product} />
            <Dialog open={open} onClose={handleClose}>
                <FormikProvider value={formik}>
                    <Form onSubmit={handleSubmit}>
                        <DialogTitle>Add Product </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Local Storage in Admin panel.
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="email"
                                label="Name"
                                type="email"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.email : ''}
                                error={Boolean(errors.email && touched.email)}
                                helperText={(errors.email && touched.email) && errors.email}
                            />
                            <TextField
                                margin="dense"
                                id="first_name"
                                label="First Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.first_name : ''}
                                error={Boolean(errors.first_name && touched.first_name)}
                                helperText={(errors.first_name && touched.first_name) && errors.first_name}
                            />
                            <TextField
                                margin="dense"
                                id="last_name"
                                label="Last Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.last_name : ''}
                                error={Boolean(errors.last_name && touched.last_name)}
                                helperText={(errors.last_name && touched.last_name) && errors.last_name}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type='submit'>{update ? 'Edit' : 'Add'}</Button>
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>
        </div>
    );
}

export default AddProduct;