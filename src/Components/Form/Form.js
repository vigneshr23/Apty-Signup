import "./form.scss";
import { Formik, FormikProvider, useFormik, Form } from "formik";
import constants from "../../Constants"
import Field from "./Field";

const FormWrapper = ({ initial, render, ...props }) => {
    const { name, email, password } = initial;
    const formik = useFormik({
        initialValues: { name: "", email: "", password: "" },
        onSubmit: () => {
            alert('will submit!')
        },
        validate: values => {
            const errors = {};
            if (!values.name || !values.email) {
                errors.name = constants?.errors?.required
                errors.email = constants?.errors?.required
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                errors.email = constants?.errors?.invalidEmail
            } else if (values.password.length < 6) {
                errors.password = constants?.errors?.passwordLength
            }
            console.log({ errors, values })
            return errors
        },
    })
    return (
        <FormikProvider value={formik}>
            <Form>
                {/* <Field
                    id="name"
                    name="name"
                    type="text"
                />
                <Field
                    id="email"
                    name="email"
                    type="text"
                />
                <Field
                    id="password"
                    name="password"
                    type="text"
                />
                <button type="submit">Sign Up</button> */}
                {props.children}
            </Form>
        </FormikProvider>
    )
}

Form.defaultProps = {
    initial: {
        name: "",
        email: "",
        password: ""
    },
}

export default FormWrapper