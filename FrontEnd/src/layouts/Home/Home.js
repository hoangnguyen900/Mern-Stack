import React from 'react';

import './Home.scss';

import HomeNav from '../../components/Home/Nav/Nav';
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home-container">
                <div className="nav-field">
                    <HomeNav/>
                </div>
            </div>
         );
    }
}
 
export default Home;