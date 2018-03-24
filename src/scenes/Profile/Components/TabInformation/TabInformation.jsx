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
            tab: {
                one: {
                    title: 'About',
                    text: 'Sunt ipsum sit mollit non occaecat reprehenderit quis id. Do deserunt commodo magna est sunt elit aliqua labore. Eiusmod sunt eiusmod veniam sunt dolor commodo anim aliquip ex sunt. Aliqua ea Lorem magna commodo laboris nisi duis. Laboris occaecat officia consectetur consequat est dolor. Cupidatat anim sit et Lorem ut ut anim reprehenderit esse.',
                },
                two: {
                    title: 'Projects',
                    text: 'Occaecat ad eiusmod eiusmod culpa aliquip adipisicing magna exercitation non. Non velit Lorem in duis reprehenderit cillum. Nostrud do amet elit fugiat minim fugiat sit sunt occaecat veniam enim. Est magna eiusmod id sunt occaecat magna sunt deserunt pariatur aliquip excepteur.',
                },
                three: {
                    title: 'Reviews',
                    text: 'Tempor velit nulla id sint enim sit fugiat excepteur minim mollit esse eu ex dolore. Veniam exercitation cupidatat ex qui. Reprehenderit sit nostrud id nulla eiusmod proident. Esse amet exercitation qui nisi eiusmod voluptate non. Qui laborum velit sit anim consectetur. Cupidatat qui laborum ut ipsum elit eiusmod ut ad incididunt in adipisicing enim.',
                },
            }
        }
    }

    TabHandler = (tab) => {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    DetailTab1Handler = () => {
        let tab1Text, detailTab1Button;
        tab1Text = document.querySelector('.tab-pane:nth-of-type(1) p');
        detailTab1Button = document.querySelector('.tab-pane:nth-of-type(1) a');

        if (tab1Text.innerHTML.length <= 200) {
            tab1Text.innerHTML = this.state.tab.one.text;
            detailTab1Button.innerHTML = 'Sembunyikan ^';
        } else {
            tab1Text.innerHTML = this.state.tab.one.text.substring(0, 200);
            detailTab1Button.innerHTML = 'Selengkapnya >';
        }
    }

    DetailTab2Handler = () => {
        let tab2Text, detailTab2Button;
        tab2Text = document.querySelector('.tab-pane:nth-of-type(2) p');
        detailTab2Button = document.querySelector('.tab-pane:nth-of-type(2) a');

        if (tab2Text.innerHTML.length <= 200) {
            tab2Text.innerHTML = this.state.tab.two.text;
            detailTab2Button.innerHTML = 'Sembunyikan ^';
        } else {
            tab2Text.innerHTML = this.state.tab.two.text.substring(0, 200);
            detailTab2Button.innerHTML = 'Selengkapnya >';
        }
    }

    DetailTab3Handler = () => {
        let tab3Text, detailTab3Button;
        tab3Text = document.querySelector('.tab-pane:nth-of-type(3) p');
        detailTab3Button = document.querySelector('.tab-pane:nth-of-type(3) a');

        if (tab3Text.innerHTML.length <= 200) {
            tab3Text.innerHTML = this.state.tab.three.text;
            detailTab3Button.innerHTML = 'Sembunyikan ^';
        } else {
            tab3Text.innerHTML = this.state.tab.three.text.substring(0, 200);
            detailTab3Button.innerHTML = 'Selengkapnya >';
        }
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
                            title={this.state.tab.one.title}
                            id="1"
                            clicked={() => this.DetailTab1Handler()}>
                            {this.state.tab.one.text.substring(0, 200)}
                        </TabContentItem>

                        <TabContentItem
                            title={this.state.tab.two.title}
                            id="2"
                            clicked={() => this.DetailTab2Handler()}>
                            {this.state.tab.two.text.substring(0, 200)}
                        </TabContentItem>

                        <TabContentItem
                            title={this.state.tab.three.title}
                            id="3"
                            clicked={() => this.DetailTab3Handler()}>
                            {this.state.tab.three.text.substring(0, 200)}
                        </TabContentItem>
                    </StyledTabContent>
                </CardBody>
            </StyledTabInformation >
        )
    }
}

export default TabInformation;
