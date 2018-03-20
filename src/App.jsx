import React, { Component } from 'react';
import Profile from './scenes/Profile/Profile';
import Layout from './hoc/Layout/Layout';

import './themes/Colors';
import './themes/Global';

class App extends Component {
    render() {
        return (
            <Layout>
                <Profile />
            </Layout>
        )
    }
}

export default App;

