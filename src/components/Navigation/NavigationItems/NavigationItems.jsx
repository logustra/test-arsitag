import React, { Component } from 'react';
import { Nav } from 'reactstrap';
import styled from 'styled-components';
import NavigationItem from './NavigationItem/NavigationItem';
import searchIcon from '../../../assets/search.png';

const NavWrapperItem = styled.div`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;

    .navbar-nav {
        .nav-item {
            .nav-link {
                font-size: 15px;
            }
        }

        &:first-of-type {
           .nav-item {
               padding: 0 10px;

               &:hover {
                   .nav-link {
                       color: var(--red);
                   }
               }
           }
        }

        &:last-of-type {
            .nav-item {
                position: relative;

                &:nth-of-type(2):before {
                    background: var(--darksmoke);
                    display: block;
                    content: '';
                    width: 1px;
                    height: 25px;
                    margin: 7px 0;
                    position: absolute;
                    right: 0;
                }

                .btn,
                input {
                    font-size: 15px;
                }

                .btn-link {
                    color: var(--secondary);

                    &:hover {
                        color: var(--red);
                        text-decoration: none;
                    }
                }

                .input-group-append {
                    display: block;
                    padding 2px 15px 0 15px;
                    border: 1px solid #ced4da;
                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;
                }
            }
        }
    }
`

class NavigationItems extends Component {
    render() {
        return (
            <NavWrapperItem>
                <Nav className="ml-4" navbar>
                    <NavigationItem
                        url="#"
                        type="anchor">
                        Inspirasi
                                </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Artikel
                                </NavigationItem>

                    <NavigationItem
                        url="#"
                        type="anchor">
                        Profesional
                                </NavigationItem>
                </Nav>

                <Nav navbar>
                    <NavigationItem
                        color="primary"
                        class="font-weight-bold"
                        type="button">
                        Cari Profesional
                                </NavigationItem>

                    <NavigationItem
                        color="link"
                        class="ml-2"
                        type="button">
                        Sign Up
                                </NavigationItem>

                    <NavigationItem
                        color="link"
                        class="mr-2"
                        type="button">
                        Log In
                                </NavigationItem>

                    <NavigationItem
                        placeholder="Cari Inspirasi..."
                        type="inputGroupAddon">
                        <img src={searchIcon} alt="search" />
                    </NavigationItem>
                </Nav>
            </NavWrapperItem>
        );
    }
}

export default NavigationItems;
