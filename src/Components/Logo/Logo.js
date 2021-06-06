import "./logo.scss";

export const Logo = ({ src, brand, align, ...props }) => {
    const altText = `${brand} Logo`
    return <figure>
        <img src={src} alt={altText} />
    </figure>
}