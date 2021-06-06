import "./banner.scss";

export const Banner = ({ bgImage, ...props }) => {
    const sytles = {
        backgroundImage: `url(${bgImage ? bgImage : null})`
    }
    return (
        <div className="banner" style={sytles}>
            {props.children}
        </div>
    )
}