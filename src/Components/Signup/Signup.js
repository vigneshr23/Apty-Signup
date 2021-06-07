/**
 * Renders Signup component and Banner comp. side by side
 * SignupForm comp is a wrapper form which uses Formik underneath to manage form elements
 * which are passed as child using Field
 */

import "./signup.scss";
import { Banner } from "../Banner"
import { Logo } from "../Logo";
import logo from "../../assets/icons/logo.svg"
import content from "../../Constants"
import { Heading } from "../Headings";
import SignupForm, { Field } from "../Form"
import Button from "../Button/Button";
import { useState } from "react";
import { Checkbox, SimpleCheckbox } from "../Checkbox";

export const Signup = () => {
    const [isValidated, setIsValidated] = useState(false);
    const handleSubmit = (formdata) => {
        console.log("form data: ", formdata)
    }
    return (
        <div className="signup">
            <div className="signup__left">
                <Heading type="main" text={content.heading} />
                <Heading type="sub1" text={content.subHeadng} />
                <SignupForm
                    initial={{
                        name: "vignesh",
                        email: "",
                        password: ""
                    }}
                    handleSubmit={handleSubmit}
                    isValidForm={setIsValidated}
                >
                    <Field
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Name"
                        icon
                    />
                    <Field
                        id="email"
                        name="email"
                        type="email"
                        placeholder="Email"
                        icon
                    />
                    <Field
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Password"
                        icon
                    />
                    <SimpleCheckbox
                        id="tnc"
                        name="tnc"
                        labelText="I agree to the <span>Terms</span> and <span>Privacy Policy</span>."
                    />

                    <div className="signup__left__form-btns">
                        <Button
                            type="submit"
                            label={content?.labels?.signUp}
                            disabled={!isValidated}
                        />
                    </div>
                </SignupForm>
            </div>
            <Banner bgImage={content?.bgImagePath}>
                <Logo align="right" src={logo} brand="Apty" />
            </Banner>
        </div>
    )
}