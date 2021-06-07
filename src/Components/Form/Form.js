/**
 * A wrapper component that utilizes Formik functions for validaton and form events.
 * Accepts a form component as a child and renders it with form fns.
 */

import "./form.scss";
import { FormikProvider, useFormik, Form } from "formik";
import constants from "../../Constants"
import { useEffect } from "react";

const FormWrapper = ({ initial, render, isValidForm, ...props }) => {
    const { name, email, password, tnc } = initial;
    const formik = useFormik({
        initialValues: { name, email, password, tnc },
        onSubmit: values => {
            alert(`will submit`)
            props.handleSubmit(values)
        },
        validate: values => {
            const errors = {};
            if (!values.name) {
                errors.name = constants?.errors?.required
            }
            if (!values.email || (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))) {
                errors.email = constants?.errors?.invalidEmail
            }
            if (!values.password || values.password.length < 6) {
                errors.password = constants?.errors?.passwordLength
            }
            console.log({values})
            if(!values.tnc) {
                errors.tnc = constants?.errors?.required
            }
            return errors
        },
    })
    useEffect(() => {
        console.log("isValidForm ", formik.isValid)
        isValidForm && isValidForm(formik.isValid)
    }, [formik.isValid, isValidForm])

    return (
        <FormikProvider value={formik}>
            <Form>
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