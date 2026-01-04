import { ErrorMessage, Field, Form, Formik } from "formik"
import * as Yup from "yup"
import "yup-phone"
import { use, useId } from "react"

const phoneRegExp =
    /^(\+?\d{1,3}[- ]?)?\d{10}$/;

const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    number: Yup.string().matches(phoneRegExp, "Invalid phone number").required("Required"),
});

const initialValues = {
    username: "",
    number: "",
};

const ContactForm = ({ onAddContact }) => {
    const nameFieldId = useId();
    const numberFieldId = useId();

    const handleSubmit = (values, action) => {

        const newContact = {
            id: crypto.randomUUID(),
            name: values.username,
            number: values.number,
        };

        onAddContact(newContact);
        action.resetForm();
    }

    return (
        <>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={FeedbackSchema}
            >
                <Form>
                    <label htmlFor={nameFieldId}>
                        Name
                        <Field type="text" name="username" id={nameFieldId} />
                        <ErrorMessage name="username" component="div" />
                    </label>
                    <label htmlFor={numberFieldId}>
                        Number
                        <Field type="text" name="number" id={numberFieldId} />
                        <ErrorMessage name="number" component="div" />
                    </label>

                    <button type="submit">Add contact</button>
                </Form>

            </Formik>
        </>
    )
}

export default ContactForm