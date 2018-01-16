import React, {Component} from 'react'
import {Row, Grid, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import Property from '../property/Property'
import './properties.css'

export default class Properties extends Component {
    constructor() {
        super();
        this.propertyDetails = {
            picture: 'https://i.ytimg.com/vi/Xx6t0gmQ_Tw/maxresdefault.jpg',
            street: '1/784 Smith Street',
            address: 'Fitzroy, VIC 3065',
            type: 'House',
            details: [2, 1, 1],
            id: 'SM1784',
            price: 450,
            bond: 2200,
            available: '12 Feb 2018'
        };
        this.applicationDetails = {
            applicationCount: 2,
            shortlisted: 2,
            total: 9
        };
    }

    render() {
        return (
            <Grid className="properties">
                <Row className="title">
                    <h2>Available lists</h2>
                    <div>
                        <span className='sml-font'>1-20 of 40 properties</span>
                        <div className='button-group'>
                            <Button>Filters</Button>
                            <span className='sml-font'>Sort by:</span>
                            <DropdownButton
                                className='drop-down-menu'
                                bsStyle='default'
                                title='New Applications'
                                key='0'
                                id='dropdown-sort'
                            >
                                <MenuItem eventKey="1">Action</MenuItem>
                                <MenuItem eventKey="2">Another action</MenuItem>
                                <MenuItem eventKey="3" active>
                                    Active Item
                                </MenuItem>
                                <MenuItem divider/>
                                <MenuItem eventKey="4">Separated link</MenuItem>
                            </DropdownButton>
                        </div>
                    </div>
                    <hr/>
                </Row>
                <Row>
                    <Property
                        propertyDetails={this.propertyDetails}
                        applicationDetails={this.applicationDetails}
                    />
                </Row>
                <Row>
                    <Property
                        propertyDetails={this.propertyDetails}
                        applicationDetails={this.applicationDetails}
                    />
                </Row>
            </Grid>
        )
    }
}