import React, { Component } from 'react';
import styled from 'styled-components';
import {
    Container,
    Navbar,
    NavbarBrand,
} from 'reactstrap';
import NavigationItems from './NavigationItems/NavigationItems';
import arsitagLogo from '../../assets/logo.png';

const StyledNavbar = styled(Navbar) `
    box-shadow: 0 2px 4px 0 var(--darksmoke);
`

class Navigation extends Component {
    render() {
        return (
            <StyledNavbar color="faded" light expand="sm">
                <Container>
                    <NavbarBrand href="/">
                        <img src={arsitagLogo} alt="arsitag" />
                    </NavbarBrand>

                    <NavigationItems />
                </Container>
            </StyledNavbar>
        );
    }
}

export default Navigation;
