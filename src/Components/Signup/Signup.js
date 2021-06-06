import "./signup.scss";
import { Banner } from "../Banner"
import { Logo } from "../Logo";
import logo from "../../assets/icons/logo.svg"
import content from "../../Constants"

const firstHalf = {
    flex: "1 0 50%",
    padding: "2.5rem"
}

export const Signup = () => {
    return (
        <div className="signup">
            <div id="first-half" style={firstHalf}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
            <Banner bgImage={content?.bgImagePath}>
                <Logo align="right" src={logo} brand="Apty" />
            </Banner>
        </div>
    )
}