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
                        <Col lg={12} xs={12} md={12} sm={6}>
                            <div className="crumbs">
                                <div className='page-width'>
                                    <span><a href="https://www.realestate.com.au/rent"
                                             className="main-rea">realestate.com.ru</a></span>
                                    <span><a href="https://1form.com/au/ras" className="main-1form">1form</a></span>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={6}>
                            <div className="header-content">
                                <div className='page-width'>
                                    <Avatar src='http://img.wowoqq.com/allimg/170524/1-1F5240H152-52.jpg'
                                            userName='Avatar'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12} xs={12} md={12} sm={6}>
                            <div className="header-search-bar">
                                <div className='page-width'>
                                    <input type='text' placeholder='Search by address, suburb or property ID.'/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}