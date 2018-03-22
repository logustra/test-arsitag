import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import InformationItems from './InformationItems/InformationItems';
import media from '../../../../themes/Media';

const StyledInformation = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;

    ${media.xs`
        margin-bottom: 30px;
    `}

    ${media.mnsm_mxlg`
        margin-bottom: 30px;
    `}
`

const Information = (props) => {
    return (
        <StyledInformation>
            <CardBody>
                <InformationItems type="iTop"/>
                <InformationItems type="iMiddle"/>
                <InformationItems type="iBottom"/>
            </CardBody>
        </StyledInformation>
    );
}

export default Information;
