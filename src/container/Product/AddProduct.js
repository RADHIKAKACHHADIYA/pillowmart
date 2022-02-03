import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, FormikProvider , useFormik } from 'formik';

function AddProduct({open , handleClose , loadData, edit}) {
    const [ update , setUpdate] = useState()
    
    useEffect(
        () => {
            setUpdate(edit)
        },
    [edit])
    const handleEdit = (value) => {
        let data = {
            "id" : update ? update.id : '' ,
            "name" : value.name , 
            "price" : parseInt(value.price) 
        }
    }

    const handleAdd = (value) => {
        let localdata = JSON.parse(localStorage.getItem("product"))
        let data = { ...value, "id": Math.floor(Math.random() * 100) + 1 }
        if (localdata === null){
            localStorage.setItem("product", JSON.stringify([data]))
        } else {
            localdata.push(data)
            localStorage.setItem("product", JSON.stringify(localdata))
        }
          
        handleClose() 
        loadData()
    };
    let AddSchema = {
        name: yup.string().
            required("must be requir your name"),
        price: yup.number().
            required("must be requir your name"),
        // img: yup.string().
        //     required("must be requir your file")
    }

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        enableReinitialize: true ,
        initialValues: {
            name: update ? update.name : "",
            price: parseInt(update ? update.price : "") ,
            // img:""
        },
        validationSchema: schema,
        onSubmit: (value) => {
            handleAdd(value)
        }
    });

    const { handleSubmit, errors, touched, handleChange, handleBlur, getFieldProps } = formik;

    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <FormikProvider value={formik}>
                    <Form  onSubmit={handleSubmit}>
                        <DialogTitle>Add Product </DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                Local Storage in Admin panel.
                            </DialogContentText>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Name"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.name : ''}
                                error={Boolean(errors.name && touched.name)}
                                helperText={(errors.name && touched.name) && errors.name}
                            />
                            <TextField
                                margin="dense"
                                id="price"
                                label="Price"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                defaultValue={update ? update.price : ''}
                                error={Boolean(errors.price && touched.price)}
                                helperText={(errors.price && touched.price) && errors.price}
                            />
                            {/* <TextField 
                                 margin="dense"
                                 id="img"
                                 label="Img"
                                 type="file"
                                 fullWidth
                                 variant="standard"
                                 {...getFieldProps("img")}
                                 error={Boolean(errors.img && touched.img)}
                                 helperText={(errors.img && touched.img) && errors.img}
                            /> */}

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