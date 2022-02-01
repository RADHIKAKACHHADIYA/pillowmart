import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { Form, FormikProvider , useFormik } from 'formik';

function AddProduct({open , handleClose , loadData}) {

    const handleAdd = (value) => {
        let localdata = JSON.parse(localStorage.getItem("product"))
        if (localdata === null){
            localStorage.setItem("product", JSON.stringify([value]))
        } else {
            localdata.push(value)
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
        img: yup.string().
            required("must be requir your file")
    }

    let schema = yup.object().shape(AddSchema)

    const formik = useFormik({
        initialValues: {
            name: "",
            price: "",
            img:""
        },
        validationSchema: schema,
        onSubmit: (value) => {
            handleAdd(value)
        }
    });

    const { handleSubmit, errors, touched, getFieldProps } = formik;

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
                                {...getFieldProps("name")}
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
                                {...getFieldProps("price")}
                                error={Boolean(errors.price && touched.price)}
                                helperText={(errors.price && touched.price) && errors.price}
                            />
                            <TextField 
                                 margin="dense"
                                 id="img"
                                 label="Img"
                                 type="file"
                                 fullWidth
                                 variant="standard"
                                 {...getFieldProps("img")}
                                 error={Boolean(errors.img && touched.img)}
                                 helperText={(errors.img && touched.img) && errors.img}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} type='submit'>Cancel</Button>
                            <Button type='submit'>Submit</Button>
                        </DialogActions>
                    </Form>
                </FormikProvider>
            </Dialog>
        </div>
    );
}

export default AddProduct;