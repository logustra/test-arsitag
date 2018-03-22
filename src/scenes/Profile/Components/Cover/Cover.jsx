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
        font-size: 20px;
        font-size: 25px;
        letter-spacing: 0;
        line-height: 35px;
        color: var(--darksmoke);

        ${media.xs`
            justify-content: center;
        `}

        ${media.sm`
            justify-content: center;
        `}
    }

    .rate-1 {
        span {
            &:nth-of-type(1) {
                color: var(--danger);
            }
        }
    }

    .rate-2 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2) {
                color: var(--danger);
            }
        }
    }

    .rate-3 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3) {
                color: var(--danger);
            }
        }
    }

    .rate-4 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4) {
                color: var(--danger);
            }
        }
    }

    .rate-5 {
        span {
            &:nth-of-type(1),
            &:nth-of-type(2),
            &:nth-of-type(3),
            &:nth-of-type(4),
            &:nth-of-type(5) {
                color: var(--danger);
            }
        }
    }

    .reviews-count {
        font-size: 15px;
        margin-left: 10px;
        color: var(--gray);
    }

`

const UserTitle = styled.h6`
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
                        <UserTitle>Andra Martin</UserTitle>
                        <div className="rate-4">
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>
                            <span>&#9733;</span>

                            <span className="reviews-count">15 Reviews</span>
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
