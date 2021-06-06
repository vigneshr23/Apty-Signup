import { useFormik } from "formik";
import constants from "../../Constants"

const SignupForm = () => {
    const formkHandlers = useFormik({
        initialValues: { name, email, password },
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
            } else if (!values.password.length < 6) {
                errors.email = constants?.errors?.passwordLength
            }
            return errors
        },
    })
}