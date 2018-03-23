import React, { Component } from 'react';
import styled from 'styled-components';
import { Card, CardBody, Nav, TabContent } from 'reactstrap';
import classnames from 'classnames';

import TabInformationItem from './TabInformationItem/TabInformationItem';
import TabContentItem from './TabContentItem/TabContentItem';

const StyledTabInformation = styled(Card) `
    border: 0;
    box-shadow: 0 2px 4px 0 #e6e7e8;
    margin-bottom: 30px;
`

const StyledNav = styled(Nav)`
    color: var(--gray);
    margin: -20px -20px 20px -20px;

    li {
        // margin-bottom: 0 !important;
        cursor: pointer;

        a {
            font-weight: bold;
            font-size: 15px;
            border: 0 !important;
            border-right: 1px solid var(--mediumsmoke) !important;
            border-top-right-radius: 0 !important;
            padding: 15px;
        }

        a.active {
            color: var(--danger) !important;
            border-bottom: 2px solid var(--danger) !important;
            padding-bottom: 14px;
        }
    }
`

const StyledTabContent = styled(TabContent)`
    color: var(--gray);
`

class TabInformation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab: '1',
        }
    }

    TabHandler = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    DetailHandler = () => {
       alert("clicked");
    }

    render() {
        return (
            <StyledTabInformation>
                <CardBody>
                    <StyledNav tabs>
                        <TabInformationItem
                            class={classnames({ active: this.state.activeTab === '1' })}
                            clicked={() => this.TabHandler('1')}>
                            Overview
                        </TabInformationItem>

                        <TabInformationItem
                            class={classnames({ active: this.state.activeTab === '2' })}
                            clicked={() => this.TabHandler('2')}>
                            Projects
                        </TabInformationItem>

                        <TabInformationItem
                            class={classnames({ active: this.state.activeTab === '3' })}
                            clicked={() => this.TabHandler('3')}>
                            Reviews
                        </TabInformationItem>
                    </StyledNav>

                    <StyledTabContent activeTab={this.state.activeTab}>
                        <TabContentItem
                            title="About"
                            id="1"
                            clicked={() => this.DetailHandler()}>
                            Sunt ipsum sit mollit non occaecat reprehenderit quis id. Do deserunt commodo magna est sunt elit aliqua labore. Eiusmod sunt eiusmod veniam sunt dolor commodo anim aliquip ex sunt. Aliqua ea Lorem magna commodo laboris nisi duis. Laboris occaecat officia consectetur consequat est dolor. Cupidatat anim sit et Lorem ut ut anim reprehenderit esse.
                        </TabContentItem>

                        <TabContentItem
                            title="Projects"
                            id="2"
                            clicked={() => this.DetailHandler()}>
                            Occaecat ad eiusmod eiusmod culpa aliquip adipisicing magna exercitation non. Non velit Lorem in duis reprehenderit cillum. Nostrud do amet elit fugiat minim fugiat sit sunt occaecat veniam enim. Est magna eiusmod id sunt occaecat magna sunt deserunt pariatur aliquip excepteur.
                        </TabContentItem>

                        <TabContentItem
                            title="Reviews"
                            id="3"
                            clicked={() => this.DetailHandler()}>
                            Laborum et velit labore cupidatat esse. Consequat dolor eiusmod minim magna consectetur pariatur. Consectetur deserunt id do tempor anim aliquip.
                        </TabContentItem>
                    </StyledTabContent>
                </CardBody>
            </StyledTabInformation >
        )
    }
}

export default TabInformation;
