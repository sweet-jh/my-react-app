import React, {Component} from 'react'
import {Row} from 'react-bootstrap'
import Property from '../property/Property'
import './properties.css'

export default class Properties extends Component {
    constructor() {
        super();
        this.propertyDetails = {
            picture: 'https://specials-images.forbesimg.com/imageserve/188085970/960x0.jpg',
            street: '1/784 Smith Street',
            address: 'Fitzroy, VIC 3065',
            type: 'House',
            details: [2, 1, 1],
            id: 'SM1784',
            price: 450,
            bond: 2200,
            available: '12 Feb 2018'
        };
        this.applicationDetails = {
            applicationCount: 2,
            shortlisted: 2,
            total: 9
        };
    }

    render() {
        return (
            <Row className="properties">
                <Property
                    propertyDetails={this.propertyDetails}
                    applicationDetails={this.applicationDetails}
                />
            </Row>
        )
    }
}