import React from 'react';
import './Business.css';

class Business extends React.Component {
    constructor(props) {
        super(props);
        this.address = `${this.props.business.address}, ${this.props.business.city} ${this.props.business.zipCode}`;
    }
    render() {
        return (
            <div className="Business">
                <div className="image-container">
                    <a href={this.props.business.url} target="_blank" rel="noopener noreferrer">
                        <img src={this.props.business.imageSrc} alt='' />
                    </a>
                </div>
                <h2>{this.props.business.name}</h2>
                <div className="Business-information">
                    <a href={`https://maps.google.com/?q=${this.address}"`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ "text-decoration": "none" , "color": "black"}}
                    >
                        <div className="Business-address">
                            <p>{this.props.business.address}</p>
                            <p>{this.props.business.city}</p>
                            <p>{this.props.business.city + " " + this.props.business.zipCode}</p>
                        </div>
                    </a>
                    <div className="Business-reviews">
                        <h3>{this.props.business.category.toUpperCase()}</h3>
                        <h3 className="rating">{`${this.props.business.rating} stars`}</h3>
                        <p>{this.props.business.reviewCount + " reviews"}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default Business;