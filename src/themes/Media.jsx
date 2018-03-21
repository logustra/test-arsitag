import { css } from 'styled-components';

const sizes = {
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200,
}

function xs(...args) {
    return css`
        @media only screen and (max-width: ${sizes.small}px) {
            ${css(...args)}
        }
    `
}

function sm(...args) {
    return css`
        @media only screen and (min-width: ${sizes.small}px) and (max-width: ${sizes.medium - 1}px) {
            ${css(...args)}
        }
    `
}

function md(...args) {
    return css`
        @media only screen and (min-width: ${sizes.medium}px) and (max-width: ${sizes.large - 1}px) {
            ${css(...args)}
        }
    `
}

function lg(...args) {
    return css`
        @media only screen and (min-width: ${sizes.large}px) and (max-width: ${sizes.xlarge - 1}px) {
            ${css(...args)}
        }
    `
}

function xl(...args) {
    return css`
        @media only screen and (min-width: ${sizes.xlarge}px) {
            ${css(...args)}
        }
    `
}

const media = {
    xs,
    sm,
    md,
    lg,
    xl,
}

export default media;

