import React, { Component } from 'react';
import Aux from '../Aux/Aux';
import { Container } from 'reactstrap';

import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Navigation />
                <main>
                    <Container>
                        {this.props.children}
                    </Container>
                </main>
                <Footer />
            </Aux>
        )
    }
}

export default Layout;
