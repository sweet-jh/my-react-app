import React, { Component } from 'react'
import {Grid, Row, Col } from 'react-bootstrap'
import './footer.css'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <Grid>
                    <Row>
                        <Col xs={12} md={12} sm={6}>
                            <div className="crumbs">
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
}