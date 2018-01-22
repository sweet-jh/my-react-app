import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Row, Grid, Button, DropdownButton, MenuItem} from 'react-bootstrap'
import Property from '../property/Property'
import './properties.css'
import data from '../initdata.json';

class Properties extends Component {
    constructor(props) {
        super();
        this.avatar = data.userInfo;
    }

    render() {
        let list = [];
        if (this.props.data)
            Object.keys(this.props.data).forEach((key) => {
                list.push(<Property property={this.props.data[key]} avatar={this.avatar} key={key}/>);
            });

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

                <div className='properties-detail'>
                    {list}
                </div>
            </Grid>
        )
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
});

export default connect(mapStateToProps)(Properties)