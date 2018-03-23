import React from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import media from '../../../../themes/Media';
import ReviewItems from './ReviewItems/ReviewItems';

const StyledCard = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    color: var(--gray);

    ${media.xs`
        margin-bottom: 30px;
    `}

    ${media.mnsm_mxlg`
        margin-bottom: 30px;
    `}
`

const Title = styled.h6`
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 20px;
`

const Review = (props) => {
    return (
        <StyledCard>
            <CardBody>
                <Title>Review (15)</Title>
                <ReviewItems />
            </CardBody>
        </StyledCard>
    )
}

export default Review;
