import "./signup.scss";
import { Banner } from "../Banner"
import { Logo } from "../Logo";
import logo from "../../assets/icons/logo.svg"
import content from "../../Constants"
import { Heading } from "../Headings";
import SignupForm, { Field } from "../Form"
import Button from "../Button/Button";

const firstHalf = {
    flex: "1 0 50%",
    padding: "2.5rem"
}

export const Signup = () => {
    const handleSubmit = (formdata) => {
        console.log("form submitted!! ", formdata)
    }
    return (
        <div className="signup">
            <div id="first-half" className="signup__left" style={firstHalf}>
                <Heading type="main" text={content.heading} />
                <Heading type="sub1" text={content.subHeadng} />
                <SignupForm
                    initial={{
                        name: "vignesh",
                    }}
                    handleSubmit={handleSubmit}
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
                    <div className="signup__term-checkbox">
                        <input type="checkbox" id="tnc" name="tnc" />
                        <label htmlFor="tnc">I agree to the <span>Terms</span> and <span>Privacy Policy</span>.</label>
                    </div>

                    <div className="signup__form-btns">
                        <Button
                            type="submit"
                            label={content?.labels?.signUp}
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