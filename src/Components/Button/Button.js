import "./button.scss";
import PropTypes from "prop-types";

const Button = ({ type, label, className, onClick, ...props }) => {
    return (
        <>
            <button
                className={className}
                type={type}
                onClick={onClick}
                {...props}
            >
                {label}
            </button>
        </>
    )
}

export default Button;

Button.defaultProps = {
    onClick: () => { },
    className: "",
    label: "",
    type: "button"
}

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func
}