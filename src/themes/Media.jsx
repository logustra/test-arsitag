import { css } from 'styled-components';

const sizes = {
    xsmall: 480,
    small: 768,
    medium: 992,
    large: 1200,
    xlarge: 1366,
    huge: 1400,
}

function xxs(...args) {
    return css`
        @media only screen and (max-width: ${sizes.xsmall}px) {
            ${css(...args)}
        }
    `
}

function xs(...args) {
    return css`
        @media only screen and (min-width: ${sizes.xsmall}px) and (max-width: ${sizes.small}px) {
            ${css(...args)}
        }
    `
}

function sm(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) and (max-width: ${sizes.medium}px) {
            ${css(...args)}
        }
    `
}

function md(...args) {
    return css`
        @media only screen and (min-width: ${sizes.medium}px) and (max-width: ${sizes.large}px) {
            ${css(...args)}
        }
    `
}

function lg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.large}px) and (max-width: ${sizes.xlarge}px) {
            ${css(...args)}
        }
    `
}

function xl(...args) {
    return css`
        @media only screen and (min-width: ${sizes.xlarge}px) and (max-width: ${sizes.huge}px) {
            ${css(...args)}
        }
    `
}

function hg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.huge}px) {
            ${css(...args)}
        }
    `
}

const media = {
    xxs,
    xs,
    sm,
    md,
    lg,
    xl,
    hg,
}

export default media;

