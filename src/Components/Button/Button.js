import "./button.scss";

const Button = ({ type, label, className, onClick }) => {
    return (
        <>
            <button
                className={className}
                type={type ? type : "button"}
                onClick={onClick}
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
    label: ""
}