
function Footer(props){
    const {image, movieTitle} = props;

    return <footer>
        <img src={image} />
        <div className="movie-session">
        <p>{movieTitle}</p>
        <p>Weekday e hora</p>
        </div>
    </footer>
}

export default Footer;