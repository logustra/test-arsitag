import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import media from '../../../../themes/Media';

const StyledCard = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;

    ${media.xs`
        margin-bottom: 30px;
    `}

    ${media.mnsm_mxlg`
        margin-bottom: 30px;
    `}
`

const Reviews = (props) => {
    return (
        <StyledCard>
            <CardBody>
                Review
            </CardBody>
        </StyledCard>
    )
}

export default Reviews;
