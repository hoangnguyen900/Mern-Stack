import React from 'react';

import './Nav.scss';
class HomeNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="home-nav-container">
                <button>Sign up</button>
                <button>Login</button>
            </div>
        );
    }
}

export default HomeNav;
