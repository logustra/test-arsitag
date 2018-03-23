import React from 'react';
import styled from 'styled-components';

import ProjectItems from './ProjectItems/ProjectItems';

const Title = styled.h5`
    font-size: 18px;
    font-weight: bold;
    color: var(--gray);
    margin-bottom: 20px;
`

const Project = (props) => {
    return (
        <div>
            <Title>Projects (12)</Title>
            <ProjectItems type="card"/>
            <ProjectItems type="services"/>
        </div>
    )
}

export default Project;
