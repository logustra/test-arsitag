import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

import axios from '../../services/Axios/Axios';
import Aux from '../../hoc/Aux/Aux';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Cover from './Components/Cover/Cover';
import Information from './Components/Information/Information';
import Reviews from './Components/Reviews/Reviews';
import TabInformation from './Components/TabInformation/TabInformation';
import Projects from './Components/Projects/Projects';
import Spinner from '../../components/UI/Spinner/Spinner';

class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: null,
        }
    }

    componentDidMount() {
        axios.get('profile/1').then( response => {
            const data = response.data.data;
            this.setState({ data })
        }).catch( error => {
            console.log(error);
        })
    }

    render() {
        let profile;

        profile = <Spinner />;

        if(this.state.data) {
            profile = (
                <Aux>
                    <Cover
                        name={this.state.data.name}
                        count={this.state.data.review_counter}/>

                    <Row>
                        <Col lg="4" xl="3">
                            <Information
                                name={this.state.data.name}
                                number={this.state.data.phone_mobile}
                                location={this.state.data.location}
                                website={this.state.data.website}/>
                            <Reviews count={this.state.data.review_counter} />
                        </Col>

                        <Col lg="8" xl="9">
                            <TabInformation />
                            <Projects />
                        </Col>
                    </Row>
                </Aux>
            )
        }

        return profile;
    }
}

export default withErrorHandler(Profile, axios);
