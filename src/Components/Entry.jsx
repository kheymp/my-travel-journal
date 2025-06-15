import fill from './Fill 219.png'
import rectangle from './Rectangle 77.png'

function Entry(props) {
    const ninjaTurtles = ["Donatello", "Michaelangelo", "Rafael", "Leonardo"]
    const paragraph = ninjaTurtles.map((turtle, index) => <p key={index}>{turtle}</p>)

    return(
        <>
            <div className="entry">
                <div className="entry-image"><img src={props.img.src} alt={props.img.alt}></img></div>
                <div className="entry-details">
                    <span className="location-wrapper">
                        <img src={fill}></img>
                        <span className="location">{props.country}</span>
                        <span className="map-link"><a href={props.googleMapsLink}>View on Google Maps</a></span>
                    </span>
                    
                    <h3>{props.title}</h3>
                    <span className="date">{props.dates}</span>
                    <span className="description">{props.text}</span>
                </div>
                
            </div>
        </>
    )
}

export default Entry