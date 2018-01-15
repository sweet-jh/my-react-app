import React, {Component} from 'react'
import {Grid, Row, Col} from 'react-bootstrap'
import Avatar from '../avatar/Avatar'
import './header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} sm={6}>
                            <div className="crumbs">
                                <span><a href="https://www.realestate.com.au/rent"
                                         className="main-rea">realestate.com.ru</a></span>
                                <span><a href="https://1form.com/au/ras" className="main-1form">1form</a></span>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} sm={6}>
                            <div className="header-content">
                                <Avatar src='http://img.wowoqq.com/allimg/170524/1-1F5240H152-52.jpg' userName='Avatar'/>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={12} sm={6}>
                            <div className="header-search-bar">
                                <input type='text' placeholder='Search by address, suburb or property ID.'/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}