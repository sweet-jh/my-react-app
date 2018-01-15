import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import Avatar from '../avatar/Avatar'
import './property.css'

export default class Property extends Component {
    render() {
        return (
            <Row className="property">
                <Col xs={3} md={3} sm={2}>
                    <Image className='property-img' src={this.props.propertyDetails.picture}/>
                    <Avatar src='http://img.wowoqq.com/allimg/170524/1-1F5240H152-52.jpg' userName='Avatar'/>
                </Col>
                <Col xs={6} md={6} sm={2}>
                    <div className='propertyDetails position'>
                        <span>{this.props.propertyDetails.street}</span>
                        <span>{this.props.propertyDetails.address}</span>
                        <span>{this.props.propertyDetails.type}</span>
                        <span>{this.props.propertyDetails.details}</span>
                        <span>ID#{this.props.propertyDetails.id}</span>
                    </div>
                    <div className='propertyDetails other'>
                        <span>${this.props.propertyDetails.price}pw</span>
                        <span>Bond: ${this.props.propertyDetails.bond}</span>
                        <span>Available: ${this.props.propertyDetails.available}</span>
                    </div>
                </Col>
                <Col xs={3} md={3} sm={2}>
                    <div className='propertyDetails'>
                        <a href='###'><span>{this.props.applicationDetails.applicationCount} New Applications</span></a>
                        <a href='###'><span>{this.props.applicationDetails.shortlisted} Shortlisted</span></a>
                        <a href='###'><span>{this.props.applicationDetails.total} Total</span></a>
                    </div>
                </Col>
            </Row>
        )
    }
}