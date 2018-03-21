import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import { Input, InputGroup, InputGroupAddon } from 'reactstrap';

import SidebarToggle from './SidebarToggle/SidebarToggle';
import NavigationItems from '../NavigationItems/NavigationItems';
import searchIcon from '../../../assets/search.png';

const Sidebar = (props) => {
    return (
        <Aux>
            <InputGroup className="d-lg-none ml-5 mr-5">
                <Input placeholder="Cari Inspirasi..." />
                <InputGroupAddon
                    addonType="append">
                    <img src={searchIcon} alt="search" />
                </InputGroupAddon>
            </InputGroup>

            <SidebarToggle
                show={props.show}
                clicked={props.clicked}/>

            <NavigationItems
                show={props.show}
                class="d-lg-none"
                type="sidebar"/>
        </Aux>
    )
}

export default Sidebar;
