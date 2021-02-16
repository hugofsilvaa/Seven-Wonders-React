import { Component } from "react"

class WonderCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFavourite: false
        }
    }

    toggleFavorite = () => {
        this.setState({ isFavourite: !this.state.isFavourite })
    }

    render() {
        const { image, name, location, year, showName, isFavourite } = this.props
        return (
            <div className="container" >
                <div className="image">
                    <img src={image} alt={name} />
                </div>
                <div className="text">
                    <h2>{name}</h2>
                    <h4>{location}</h4>
                    <p>{year}</p>
                    <button onClick={() => showName(name)}>Wonder Name</button>
                    <button onClick={() => this.toggleFavorite(isFavourite)}>{this.state.isFavourite ? "★" : "☆"}</button>
                </div>
            </div>
        )
    }
}

export default WonderCard