import React, {Component} from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import Avatar from '../avatar/Avatar'
import './property.css'

export default class Property extends Component {
    render() {
        return (
            <Row className="property">
                <Col lg={3} xs={3} md={12} sm={12}>
                    <Image className='property-img' src={this.props.property.picture}/>
                    <Avatar src={this.props.avatar.picture} userName={this.props.avatar.userName}/>
                </Col>
                <Col lg={6} xs={6} md={12} sm={12}>
                    <div className='propertyDetails position'>
                        <span className='big-font'>{this.props.property.street}</span>
                        <span className='mid-font'>{this.props.property.address}</span>
                        <span className='sml-font'>{this.props.property.type}</span>
                        <span className='mid-font'>{this.props.property.details}</span>
                        <span className='sml-font'>ID#{this.props.property.id}</span>
                    </div>
                    <div className='propertyDetails other'>
                        <span className='big-font'>${this.props.property.price}pw</span>
                        <span className='mid-font'>Bond: ${this.props.property.bond}</span>
                        <span className='sml-font'>Available: ${this.props.property.available}</span>
                    </div>
                </Col>
                <Col lg={3} xs={3} md={12} sm={12}>
                    <div className='propertyDetails application'>
                        <a href={this.props.property.applications.link}><span>{this.props.property.applications.count} New Applications</span></a>
                        <a href='###'><span className='mid-font'>{this.props.property.applications.shortlisted} Shortlisted</span></a>
                        <a href='###'><span className='mid-font'>{this.props.property.applications.total} Total</span></a>
                    </div>
                </Col>
            </Row>
        )
    }
}