import React from 'react';
import styled from 'styled-components';

import ReviewItem from './ReviewItem/ReviewItem';
import imgUsr from '../../../../../assets/logo_tumblr_22.png';

const StyledReviewItems = styled.ul`
    margin-bottom: 0;

    li {
        border-bottom: 2px solid var(--mediumsmoke);
        padding-bottom: 20px;
        margin-bottom: 20px;

        &:last-of-type {
            border-bottom: 0;
            padding-bottom: 0;
            margin-bottom: 0;
        }
    }
`

const ReviewItems = (props) => {
    return (
        <StyledReviewItems className="list-unstyled">
            <ReviewItem
                src={imgUsr}
                alt="img"
                name="Andra Martin"
                rate="2">
                Ut ut non ipsum cillum amet quis quis eiusmod dolore fugiat.
            </ReviewItem>

            <ReviewItem
                src={imgUsr}
                alt="img"
                name="Andra Martin"
                rate="3">
                Ut ut non ipsum cillum amet quis quis eiusmod dolore fugiat.
            </ReviewItem>

            <ReviewItem
                src={imgUsr}
                alt="img"
                name="Andra Martin"
                rate="4">
                Ut ut non ipsum cillum amet quis quis eiusmod dolore fugiat.
            </ReviewItem>

            <ReviewItem
                src={imgUsr}
                alt="img"
                name="Andra Martin"
                rate="5">
                Ut ut non ipsum cillum amet quis quis eiusmod dolore fugiat.
            </ReviewItem>
        </StyledReviewItems>
    )
}

export default ReviewItems;
