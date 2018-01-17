import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import Avatar from '../avatar/Avatar'
import './property.css'

export default class Property extends Component {
    render() {
        return (
            <Row className="property">
                <Col lg={3} xs={3} md={12} sm={12}>
                    <Image className='property-img' src={this.props.propertyDetails.picture}/>
                    <Avatar src='http://img.wowoqq.com/allimg/170524/1-1F5240H152-52.jpg' userName='Avatar'/>
                </Col>
                <Col lg={6} xs={6} md={12} sm={12}>
                    <div className='propertyDetails position'>
                        <span className='big-font'>{this.props.propertyDetails.street}</span>
                        <span className='mid-font'>{this.props.propertyDetails.address}</span>
                        <span className='sml-font'>{this.props.propertyDetails.type}</span>
                        <span className='mid-font'>{this.props.propertyDetails.details}</span>
                        <span className='sml-font'>ID#{this.props.propertyDetails.id}</span>
                    </div>
                    <div className='propertyDetails other'>
                        <span className='big-font'>${this.props.propertyDetails.price}pw</span>
                        <span className='mid-font'>Bond: ${this.props.propertyDetails.bond}</span>
                        <span className='sml-font'>Available: ${this.props.propertyDetails.available}</span>
                    </div>
                </Col>
                <Col lg={3} xs={3} md={12} sm={12}>
                    <div className='propertyDetails application'>
                        <a href='###'><span>{this.props.applicationDetails.applicationCount} New Applications</span></a>
                        <a href='###'><span className='mid-font'>{this.props.applicationDetails.shortlisted} Shortlisted</span></a>
                        <a href='###'><span className='mid-font'>{this.props.applicationDetails.total} Total</span></a>
                    </div>
                </Col>
            </Row>
        )
    }
}