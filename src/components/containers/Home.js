import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {bindActionCreators} from 'redux'
import * as propertyActions from '../properties/action'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Properties from '../properties/Properties'
import './home.css'

class Home extends Component {
    componentDidMount() {
        this.props.actions.getProperties()
    }

    render() {
        return (
            <div className='default-style'>
                <Header/>
                <Properties data={this.props.properties}/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ui: state.ui,
    properties: state.properties
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(propertyActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home))
