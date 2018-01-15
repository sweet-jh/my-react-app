import React, {Component} from 'react'
import {Row, Image} from 'react-bootstrap'
import './avatar.css'

export default class Avatar extends Component {
    render() {
        return (
            <Row className="avatar">
                <Image className='avatar-icon' src={this.props.src} circle/>
                <span className='avatar-name'>{this.props.userName}</span>
            </Row>
        )
    }
}