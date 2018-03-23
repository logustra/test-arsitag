import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import Aux from '../../hoc/Aux/Aux';
import Cover from './Components/Cover/Cover';
import Information from './Components/Information/Information';
import Reviews from './Components/Reviews/Reviews';
import TabInformation from './Components/TabInformation/TabInformation';
import Project from './Components/Project/Project';

class Profile extends Component {

    render() {
        return (
            <Aux>
                <Cover />

                <Row>
                    <Col lg="4" xl="3">
                        <Information />
                        <Reviews />
                    </Col>

                    <Col lg="8" xl="9">
                        <TabInformation />
                        <Project />
                    </Col>
                </Row>
            </Aux>
        )
    }
}

export default Profile;
