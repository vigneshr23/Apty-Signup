import "./button.scss";

const Button = ({ type, label, className, onClick, ...props }) => {
    return (
        <>
            <button
                className={className}
                type={type ? type : "button"}
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
    label: ""
}