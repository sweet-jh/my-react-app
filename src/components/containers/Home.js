import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Properties from '../properties/Properties'
import './home.css'

class Home extends Component {
    render() {
        return (
            <div className='default-font'>
                <Header/>
                <Properties/>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    ui: state.ui
})

export default withRouter(connect(mapStateToProps)(Home))
