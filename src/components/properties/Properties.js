import React, {Component} from 'react'
import {Row, Grid, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import Property from '../property/Property'
import './properties.css'
import data from '../initdata.json';

export default class Properties extends Component {
    constructor(props) {
        super();
        this.properties = data.properties;
    }

    render() {
        return (
            <Grid className="properties">
                <Row className="title">
                    <h2>Available lists</h2>
                    <div>
                        <span className='sml-font'>1-20 of 40 properties</span>
                        <div className='button-group'>
                            <Button className='btn-filter'>Filters</Button>
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
                {this.properties.map((property) => {
                    return (<Row key={property.id}>
                        <Property
                            propertyDetails={property}
                            applicationDetails={property.applications}
                        />
                    </Row>)
                })}
            </Grid>
        )
    }
}