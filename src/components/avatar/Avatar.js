import React, {Component} from 'react'
import {Image} from 'react-bootstrap'
import './avatar.css'

export default class Avatar extends Component {
    render() {
        return (
            <Image class='avatar' src='resources/avatar.jpg' circle/>
        )
    }
}