import React from 'react';
import styled from 'styled-components';
import {
    Card,
    CardImg,
    CardBody,
    Button
} from 'reactstrap';

import media from '../../../../themes/Media';
import imgCover from '../../../../assets/cover.png';
import imgUser from '../../../../assets/logo_tumblr_2.png';

const StyledCard = styled(Card)`
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
`

const StyledCardImg = styled(CardImg)`
    border-radius: 0;

    ~ .card-body {
        display: flex;
        align-items: center;
        padding-top: 24px;
        padding-bottom: 15px;

        ${media.xs`
            flex-direction: column;
            justify-content: center;
            padding-bottom: 30px;

            img {
                margin-bottom: 25px;
                margin-right: 0;
            }
        `}

        ${media.mnsm_mxlg`
            flex-direction: column;
            padding-bottom: 30px;

            img {
                margin-bottom: 25px;
                margin-right: 0;
            }
        `}
    }
`

const UserImg = styled.img`
    position: relative;
    margin-top: -65px;
    margin-right: 20px;
`

const UserBody = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: -10px;

    ${media.xs`
        flex-direction: column;
    `}

    ${media.sm`
        flex-direction: column;
    `}
`

const UserGroup = styled.div`

    ${media.xs`
        text-align: center;

        .btn {
            margin-top: 25px;
        }
    `}

    ${media.sm`
        text-align: center;

        .btn {
            margin-top: 25px;
        }
    `}

    @media only screen and (max-width: 370px) {
        display: flex;
        flex-direction: column;

        .btn{
            margin-left: 0 !important;
        }
    }

    .btn + .btn {
        margin-left: 15px;
    }

    .rate-1,
    .rate-2,
    .rate-3,
    .rate-4,
    .rate-5 {
        display: flex;
        align-items: center;

        ${media.xs`
            justify-content: center;
        `}

        ${media.sm`
            justify-content: center;
        `}
    }

    .reviews-count {
        font-size: 15px;
        margin-left: 10px;
        color: var(--gray);
    }

`

const UserTitle = styled.h5`
    font-weight: bold;
    font-size: 18px;
    margin: 0;
    color: var(--gray);
`

const Cover = (props) => {
    return (
        <StyledCard>
            <StyledCardImg top src={imgCover} alt="cover"/>
            <CardBody>
                <UserImg src={imgUser} alt="User Image"/>
                <UserBody>
                    <UserGroup>
                        <UserTitle>{props.name}</UserTitle>
                        <div className="rate-4">
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>

                            <span className="reviews-count">{props.count} Reviews</span>
                        </div>
                    </UserGroup>

                    <UserGroup>
                        <Button
                            color="danger"
                            className="btn-line-danger">
                            Berikan Review
                        </Button>
                        <Button color="danger">
                            Contact Sekarang
                        </Button>
                    </UserGroup>
                </UserBody>
            </CardBody>
        </StyledCard>
    )
}

export default Cover;
