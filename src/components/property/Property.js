import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import './property.css'

export default class Property extends Component {
    render() {
        return (
            <Row className="property">
                <Col xs={3} md={3} sm={2}>
                    <Image className='property-img' src={this.props.src}/>
                </Col>
                <Col xs={6} md={6} sm={2}>
                    <span>{this.props.street}</span>
                    <span>{this.props.address}</span>
                    <span>{this.props.type}</span>
                    <span>{this.props.details}</span>
                    <span>ID#{this.props.id}</span>
                    <span>${this.props.price}pw</span>
                    <span>Bond: ${this.props.bond}</span>
                    <span>Available: ${this.props.available}</span>
                </Col>
                <Col xs={3} md={3} sm={2}>
                    <a href='###'><span>{this.props.applicationCount} New Applications</span></a>
                    <a href='###'><span>{this.props.shortlisted} Shortlisted</span></a>
                    <a href='###'><span>{this.props.total} Total</span></a>
                </Col>
            </Row>
        )
    }
}