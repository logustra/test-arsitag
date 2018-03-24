import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import InformationItems from './InformationItems/InformationItems';

const StyledInformation = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
`

class Information extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: props.name,
            number: props.number,
            location: props.location,
            website: props.website,
        }
    }

    callNowHandler = () => {
        const callButton = document.querySelector('.information .card-body ul:first-of-type li a');
        callButton.innerHTML = this.state.number;
        callButton.setAttribute('href', `tel:${this.state.number}`);
    }

    render() {
        return (
            <StyledInformation className="information">
                <CardBody>
                    <InformationItems
                        type="iTop"
                        name={this.state.name}
                        location={this.state.location}
                        website={this.state.website}
                        clicked={() => this.callNowHandler()} />

                    <InformationItems type="iMiddle" />
                    <InformationItems type="iBottom" />
                </CardBody>
            </StyledInformation>
        );
    }
}

export default Information;
