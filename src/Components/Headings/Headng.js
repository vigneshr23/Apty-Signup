import PropTypes from 'prop-types';
import "./heading.scss";

export const Heading = ({type, text, color, style, className, children, ...props}) => {
    const _className = `heading-${type} ${className ? className : ""}`;
    const styles = style ? style : {}

    const getHeading = () => {
        switch(type) {
            case "main":
                return (
                    <h1 className={_className} style={styles}>
                        {text}
                        {children}
                    </h1>
                )
            case "sub1":
                return (
                    <h2 className={_className} style={styles}>
                        {text}
                        {children}
                    </h2>
                )
            default:
                return null
        }
    }

    return getHeading()
}

Heading.defaultProps = {
    type: "sub1",
    text: "sub1"
}

Heading.propTypes = {
    type: PropTypes.oneOf(['main', 'sub1']),
    text: PropTypes.string,
    style: PropTypes.string,
    className: PropTypes.string,
}