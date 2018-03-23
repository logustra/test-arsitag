import React from 'react';
import styled from 'styled-components';
import { Row } from 'reactstrap';

import ProjectItem from './ProjectItem/ProjectItem';
import imgP1 from '../../../../../assets/p1.png';
import imgP2 from '../../../../../assets/p2.png';
import imgP3 from '../../../../../assets/p3.png';
import imgP4 from '../../../../../assets/p4.png';
import imgP5 from '../../../../../assets/p5.png';
import imgP6 from '../../../../../assets/p6.png';

const StyledRow = styled(Row)`

    .col-sm-12 + .col-sm-12 {
        margin-top: 20px;
    }
`

const ProjectItems = (props) => {
    let items;

    if (props.type === "card") {
        items = (
            <Row>
                <ProjectItem
                    src={imgP1}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />

                <ProjectItem
                    src={imgP2}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />

                <ProjectItem
                    src={imgP3}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />

                <ProjectItem
                    src={imgP4}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />

                <ProjectItem
                    src={imgP5}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />

                <ProjectItem
                    src={imgP6}
                    alt="Project"
                    title="Project Title"
                    photos="6"
                    type={props.type} />
            </Row>
        )
    } else if (props.type === "services") {
        items = (
            <StyledRow>
                <ProjectItem
                    title="Profesional Categories in Selden"
                    type={props.type}>
                    Selden Driveway Instalation &amp; Maintenance . Selden Fence Contractors . Selden Fireplaces .
                    Selden Garage Door Sales . Selden Glass &amp; Shower Door Dealers . Selden Handyman . Selden Hardwood Flooring Dealers .
                    Selden Hot Tub &amp; Spa Dealers . Selden Kitchen &amp; Bath Fixtures . Selden Lighting
                </ProjectItem>

                <ProjectItem
                    title="Hardwood Flooring Dealers &amp; Installers near Selden"
                    type={props.type}>
                    Setauket-East Setauket Hardwood Flooring Dealers &amp; Installers . Kings Park Hardwood Flooring Dealers &amp; Installers .
                    East Islip Hardwood Flooring Dealers &amp; Installers . Stony Brook Hardwood Flooring Dealers &amp; Installers .
                    Saint James Hardwood Flooring Dealers &amp; Installers . Ridge Hardwood Flooring Dealers &amp; Installers . Nesconset Hardwood Flooring Dealers &amp; Installers .
                    Mastic Beach Hardwood Flooring Dealers &amp; Installers . Terryville Hardwood Flooring Dealers &amp; Installers .
                    Patchogue Hardwood Flooring Dealers &amp; Installers
                </ProjectItem>
            </StyledRow>
        )
    }

    return items;
}

export default ProjectItems;
