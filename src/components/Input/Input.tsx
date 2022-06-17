import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentType } from "../StoreProvider/StoreProvider-types";
import { Form, Formik, FormikHelpers } from "formik";
import { validateEmail, validateText, validateURL } from "../../lib/utils/formValidation";
import { errorsType, valuesType } from "./Input-types";
import { Button, TextField } from "@mui/material";
import styledC from "styled-components";
import { styled } from "@mui/system";
import { Theme } from "../../lib/styled/variables";
import SendIcon from "@mui/icons-material/Send";

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

    const handleSubmit = (values: valuesType,  formikHelpers: FormikHelpers<valuesType>) => {
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
        formikHelpers.resetForm();
        formikHelpers.setSubmitting(false);
    };

    return (
        <Wrap>
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
                        <InnerTopWrap>
                            <TextField
                                name="name"
                                value={values.name}
                                onChange={handleChange}
                                error={touched.name && Boolean(errors.name)}
                                helperText={touched.name && errors.name}
                                id="outlined-basic"
                                label="Ваше имя"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                name="email"
                                value={values.email}
                                onChange={handleChange}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                                id="outlined-basic"
                                label="Ваш адрес электронной почты"
                                variant="outlined"
                                size="small"
                            />
                            <TextField
                                name="avatar"
                                value={values.avatar}
                                onChange={handleChange}
                                error={touched.avatar && Boolean(errors.avatar)}
                                helperText={touched.avatar && errors.avatar}
                                autoComplete="off"
                                id="outlined-basic"
                                label="Ссылка на изображение(аватар)"
                                variant="outlined"
                                size="small"
                            />
                        </InnerTopWrap>
                        <InnerBottomWrap>
                            <StyledTextarea
                                name="text"
                                value={values.text}
                                onChange={handleChange}
                                error={touched.text && Boolean(errors.text)}
                                helperText={touched.text && errors.text}
                                id="outlined-multiline-flexible"
                                label="Написать комментарий..."
                                multiline
                                maxRows={4}
                                size="small"
                            />
                            <StyledButton color="primary" variant="contained" type="submit">
                                {/* Отправить комментарий */}
                                <SendIcon />
                            </StyledButton>
                        </InnerBottomWrap>
                    </Form>
                )}
            </Formik>
        </Wrap>
    );
};

const Wrap = styledC.div`
    background-color: #fff;
    border-bottom: 1px solid ${Theme.greyColor};
    padding: 20px;

    @media (max-width: 600px) {
        padding: 12px 10px;
    }
`;

const InnerTopWrap = styledC.div`
    display: grid;
    grid-template-columns: 2fr 3fr 4fr;
    grid-column-gap: 10px;
    align-items: start;
    margin-bottom: 15px;

    @media (max-width: 600px) {
        grid-template-columns: 1fr;
        grid-row-gap: 10px;
        margin-bottom: 10px;
    }
`;

const InnerBottomWrap = styledC.div`
    display: grid;
    grid-template-columns: 1fr 37px;
    grid-column-gap: 10px;
    align-items: end;
`;

const StyledTextarea = styled(
    TextField,
    {}
)({
    width: "100%",
});

const StyledButton = styled(
    Button,
    {}
)({
    height: "37px",
    width: "37px",
    minWidth: "37px",
});
