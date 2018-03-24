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
            activeTab: 0,
            tabs: [
                {
                    id: 0,
                    title: 'About',
                    text: 'Sunt ipsum sit mollit non occaecat reprehenderit quis id. Do deserunt commodo magna est sunt elit aliqua labore. Eiusmod sunt eiusmod veniam sunt dolor commodo anim aliquip ex sunt. Aliqua ea Lorem magna commodo laboris nisi duis. Laboris occaecat officia consectetur consequat est dolor. Cupidatat anim sit et Lorem ut ut anim reprehenderit esse.',
                },
                {
                    id: 1,
                    title: 'Projects',
                    text: 'Occaecat ad eiusmod eiusmod culpa aliquip adipisicing magna exercitation non. Non velit Lorem in duis reprehenderit cillum. Nostrud do amet elit fugiat minim fugiat sit sunt occaecat veniam enim. Est magna eiusmod id sunt occaecat magna sunt deserunt pariatur aliquip excepteur.',
                },
                {
                    id: 2,
                    title: 'Reviews',
                    text: 'Tempor velit nulla id sint enim sit fugiat excepteur minim mollit esse eu ex dolore. Veniam exercitation cupidatat ex qui. Reprehenderit sit nostrud id nulla eiusmod proident. Esse amet exercitation qui nisi eiusmod voluptate non. Qui laborum velit sit anim consectetur. Cupidatat qui laborum ut ipsum elit eiusmod ut ad incididunt in adipisicing enim.',
                },
            ]
        }
    }

    TabHandler = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    DetailTabHandler = () => {
        alert("clicked");
    }

    render() {
        let tabItems, tabContents;

        tabItems = this.state.tabs.map((tab, index) => {
            return (
                <TabInformationItem
                    key={index}
                    class={classnames({ active: this.state.activeTab === index })}
                    clicked={() => this.TabHandler(index)}>
                    {tab.title}
                </TabInformationItem>
            )
        });

        tabContents = this.state.tabs.map((tab, index) => {
            return (
                <TabContentItem
                    key={index}
                    title={tab.title}
                    id={tab.id}
                    clicked={() => this.DetailTabHandler()}>
                    {tab.text.substring(0, 200)}
                </TabContentItem>
            )
        });


        return (
            <StyledTabInformation>
                <CardBody>
                    <StyledNav tabs>
                        {tabItems}
                    </StyledNav>

                    <StyledTabContent activeTab={this.state.activeTab}>
                        {tabContents}
                    </StyledTabContent>
                </CardBody>
            </StyledTabInformation >
        )
    }
}

export default TabInformation;
