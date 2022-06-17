import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentType } from "../StoreProvider/StoreProvider-types";
import { Form, Formik, FormikHelpers } from "formik";
import { validateEmail, validateText, validateURL } from "../../lib/utils/formValidation";
import { errorsType, valuesType } from "./Input-types";
import { Button, TextField } from "@mui/material";

export const Input = () => {
    const addComment = useContext(StoreContext).addComment;

    const validateForm = (values: valuesType) => {
        const errors: errorsType = {};
        validateURL(values.avatar) !== undefined && (errors.avatar = validateURL(values.avatar));
        validateEmail(values.email) !== undefined && (errors.email = validateEmail(values.email));
        validateText(values.name) !== undefined && (errors.name = validateText(values.name));
        validateText(values.text) !== undefined && (errors.text = validateText(values.text));
        return errors;
    };

    const handleSubmit = (values: valuesType, { setSubmitting }: FormikHelpers<valuesType>) => {
        const comment: commentType = {
            id: 0,
            avatar: values.avatar,
            name: values.name,
            email: values.email,
            date: new Date(),
            message: values.text,
            rating: 0,
        };
        addComment(comment);
        setSubmitting(false);
    };

    return (
        <div style={{ minHeight: "10px", marginBottom: "10px" }}>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    avatar: "",
                    text: "",
                }}
                onSubmit={handleSubmit}
                validate={validateForm}
            >
                {({ errors, touched, values, handleChange }) => (
                    <Form>
                        <TextField
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={touched.name && errors.name}
                            // validate={validateName}
                            id="outlined-basic"
                            label="Ваше имя"
                            variant="outlined"
                            // component={TextField}
                        />
                        {/* {errors.name && touched.name && <div>{errors.name}</div>} */}
                        <TextField
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            error={touched.email && Boolean(errors.email)}
                            helperText={touched.email && errors.email}
                            // helperText={touched.email && validateEmail}
                            id="outlined-basic"
                            label="Ваш адрес электронной почты"
                            variant="outlined"
                            // component={TextField}
                        />
                        {/* {errors.email && touched.email && <div>{errors.email}</div>} */}
                        <TextField
                            name="avatar"
                            value={values.avatar}
                            onChange={handleChange}
                            error={touched.avatar && Boolean(errors.avatar)}
                            helperText={touched.avatar && errors.avatar}
                            autoComplete="off"
                            // validate={validateAvatar}
                            id="outlined-basic"
                            label="Ссылка на изображение(аватар)"
                            variant="outlined"
                            // component={TextField}
                        />
                        {/* {errors.avatar && touched.avatar && <div>{errors.avatar}</div>} */}
                        <TextField
                            name="text"
                            value={values.text}
                            onChange={handleChange}
                            error={touched.text && Boolean(errors.text)}
                            helperText={touched.text && errors.text}
                            // validate={validateText}
                            // component={TextField}
                            id="outlined-multiline-static"
                            label="Написать комментарий..."
                            multiline
                            rows={4}
                        />
                        {/* <Fab color="primary" aria-label="add"></Fab> */}
                        <Button color="primary" variant="contained" fullWidth type="submit">
                            Отправить комментарий
                        </Button>
                    </Form>
                )}
            </Formik>
            
        </div>
    );
};
