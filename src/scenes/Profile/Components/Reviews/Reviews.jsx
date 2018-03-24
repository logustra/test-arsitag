import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody } from 'reactstrap';

import media from '../../../../themes/Media';
import ReviewItem from './ReviewItem/ReviewItem';
import imgUsr from '../../../../assets/logo_tumblr_22.png';

const StyledCard = styled(Card) `
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

class Reviews extends Component {
    constructor(props) {
        super(props)
        this.state = {
            reviews: [
                {
                    img: imgUsr,
                    name: 'Andra Martin',
                    rate: '2',
                    comment: 'Dolor laboris velit dolor in mollit ex sit nisi cupidatat nisi ullamco et amet consectetur.'
                },
                {
                    img: imgUsr,
                    name: 'John Doe',
                    rate: '3',
                    comment: 'Exercitation occaecat veniam ea exercitation laborum nisi ad do cupidatat cupidatat aliquip.'
                },
                {
                    img: imgUsr,
                    name: 'Andrew Matt',
                    rate: '4',
                    comment: 'Pariatur adipisicing anim irure adipisicing ea et commodo dolor eiusmod amet.'
                },
                {
                    img: imgUsr,
                    name: 'Matt Orto',
                    rate: '5',
                    comment: 'Exercitation anim laboris cupidatat anim ea mollit sit.'
                },
            ]
        }
    }

    render() {
        let reviews;

        reviews = this.state.reviews.map( (review, index) => {
            return (
                <ReviewItem
                    key={index}
                    src={review.img}
                    alt={review.img}
                    name={review.name}
                    rate={review.rate}>
                    {review.comment}
                </ReviewItem>
            )
        })

        return (
            <StyledCard>
                <CardBody>
                    <Title>Review ({this.props.count})</Title>
                    <StyledReviewItems className="list-unstyled">
                        {reviews}
                    </StyledReviewItems>
                </CardBody>
            </StyledCard>
        )
    }
}

export default Reviews;
