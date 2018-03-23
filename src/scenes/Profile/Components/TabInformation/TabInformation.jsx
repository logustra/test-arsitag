import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

const StyledTabInformation = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
`

const TabInformation = (props) => {
    return (
        <StyledTabInformation>
            <CardBody>
                <p>Tab Information</p>
            </CardBody>
        </StyledTabInformation>
    )
}

export default TabInformation;
