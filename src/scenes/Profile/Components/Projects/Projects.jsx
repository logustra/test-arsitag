import React, { Component } from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

import Aux from '../../../../hoc/Aux/Aux';
import ProjectItem from './ProjectItem/ProjectItem';
import imgP1 from '../../../../assets/p1.png';
import imgP2 from '../../../../assets/p2.png';
import imgP3 from '../../../../assets/p3.png';
import imgP4 from '../../../../assets/p4.png';
import imgP5 from '../../../../assets/p5.png';
import imgP6 from '../../../../assets/p6.png';

const Title = styled.h5`
    font-size: 18px;
    font-weight: bold;
    color: var(--gray);
    margin-bottom: 20px;
`

const StyledRow = styled(Row)`

    .col-sm-12 + .col-sm-12 {
        margin-top: 20px;
    }
`

class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [
                {
                    img: imgP1,
                    title: 'Project Title 1',
                    photos_count: 3
                },
                {
                    img: imgP2,
                    title: 'Project Title 2',
                    photos_count: 4
                },
                {
                    img: imgP3,
                    title: 'Project Title 3',
                    photos_count: 5
                },
                {
                    img: imgP4,
                    title: 'Project Title 4',
                    photos_count: 6
                },
                {
                    img: imgP5,
                    title: 'Project Title 5',
                    photos_count: 7
                },
                {
                    img: imgP6,
                    title: 'Project Title 6',
                    photos_count: 8
                },
            ],
            services: [
                {
                    title: 'Profesional Categories in Selden',
                    body: 'Selden Driveway Instalation &amp; Maintenance . Selden Fence Contractors . Selden Fireplaces . Selden Garage Door Sales.Selden Glass & amp; Shower Door Dealers .Selden Handyman .Selden Hardwood Flooring Dealers . Selden Hot Tub & amp; Spa Dealers.Selden Kitchen & amp; Bath Fixtures.Selden Lighting'
                },
                {
                    title: 'Hardwood Flooring Dealers &amp; Installers near Selden',
                    body: 'Setauket-East Setauket Hardwood Flooring Dealers &amp; Installers . Kings Park Hardwood Flooring Dealers &amp; Installers . East Islip Hardwood Flooring Dealers & amp; Installers .Stony Brook Hardwood Flooring Dealers & amp; Installers . Saint James Hardwood Flooring Dealers & amp; Installers .Ridge Hardwood Flooring Dealers & amp; Installers .Nesconset Hardwood Flooring Dealers & amp; Installers . Mastic Beach Hardwood Flooring Dealers & amp; Installers .Terryville Hardwood Flooring Dealers & amp; Installers . Patchogue Hardwood Flooring Dealers & amp; Installers'
                }
            ]
        }
    }

    render() {
        let cards, services;

        cards = this.state.cards.map( (card, index) => {
            return (
                <ProjectItem
                    key={index}
                    src={card.img}
                    alt={card.title}
                    title={card.title}
                    photos={card.photos_count}
                    type="card" />
            )
        })

        services = this.state.services.map( (service, index) => {
            return (
                <ProjectItem
                    key={index}
                    title={service.title}
                    type="service">
                    {service.body}
                </ProjectItem>
            )
        })

        return (
            <Aux>
                <Title>Projects (12)</Title>
                <Row>
                    {cards}
                </Row>
                <StyledRow>
                    {services}
                </StyledRow>
            </Aux>
        );
    }
}

export default Projects;
