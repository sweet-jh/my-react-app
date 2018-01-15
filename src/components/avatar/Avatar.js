import React, {Component} from 'react'
import {Row, Image} from 'react-bootstrap'
import './avatar.css'

export default class Avatar extends Component {
    render() {
        return (
            <Row className="avatar">
                <div className='avatar-wrapper'>
                    <Image className='avatar-icon' src={this.props.src} circle/>
                </div>
                <span className='avatar-name'>{this.props.userName}</span>
            </Row>
        )
    }
}