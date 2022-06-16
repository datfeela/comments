import { useContext } from "react";
import { StoreContext } from "../StoreProvider/StoreProvider";
import { commentType } from "../StoreProvider/StoreProvider-types";
import { Field, Form, Formik, FormikHelpers } from "formik";
import { validateAvatar, validateEmail, validateName, validateText } from "../../lib/utils/formValidation";

export type Values = {
    name: string;
    email: string;
    avatar: string;
    text: string;
};

export const Input = () => {
    const addComment = useContext(StoreContext).addComment;

    let handleSubmit = (values: any, { setSubmitting }: FormikHelpers<Values>) => {
        let comment: commentType = {
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
            >
                {({ errors, touched }) => (
                    <Form>
                        <Field name="name" placeholder="Ваше имя" validate={validateName} />
                        {errors.name && touched.name && <div>{errors.name}</div>}
                        <Field name="email" placeholder="Ваш адрес электронной почты" validate={validateEmail} />
                        {errors.email && touched.email && <div>{errors.email}</div>}
                        <Field name="avatar" placeholder="Ссылка на изображение(аватар)" validate={validateAvatar} />
                        {errors.avatar && touched.avatar && <div>{errors.avatar}</div>}
                        <Field name="text" placeholder="Написать комментарий..." component="textarea" validate={validateText} />
                        {errors.text && touched.text && <div>{errors.text}</div>}
                        <button type="submit">Отправить комментарий</button>
                    </Form>
                )}
            </Formik>

            {/* <button onClick={handleSubmit}></button> */}
        </div>
    );
};
