import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import './avatar.css'

export default class Avatar extends Component {
    render() {
        return (
            <Image className='avatar' src='resources/avatar.jpg' circle/>
        )
    }
}