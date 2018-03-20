import React from 'react';
import styled from 'styled-components';

const FooItem = styled.li`
    margin: 4px 0;
`

const FooLink = styled.a`
    color: var(--gray);
    font-size: 15px;

        &:hover {
            text-decoration: none;
        }
`

const FooP = styled.p`
    color: var(--gray);
    font-size: 15px;
`

const FooterItem = (props) => {
    let link;

    if (props.type === "anchor") {
        link = (
            <FooLink
                className={props.classText}
                href={props.url}>
                {props.children}
            </FooLink>
        )
    } else {
        link = (
            <FooP className={props.classText}>
                {props.children}
            </FooP>
        )
    }

    return (
        <FooItem className={props.classItem}>
            {link}
        </FooItem>
    )
}

export default FooterItem;
