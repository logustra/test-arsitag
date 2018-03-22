import { injectGlobal } from 'styled-components';

injectGlobal`
    @import url('https://fonts.googleapis.com/css?family=Lato');

    body {
        font-family: 'Lato', sans-serif;
        font-size: 14px;
        background: var(--smoke);
    }

    p {
        margin: 0;
    }

    .btn-line-danger {
        background: var(--white);
        border: 1px solid var(--danger);
        color: var(--danger);

        &:hover,
        &:focus,
        &:active {
            background: var(--white) !important;
            color: var(--danger) !important;
        }
    }

    .navbar {

        .input-group-append {
            display: block;
            padding 5px 15px 0 15px;
            border: 1px solid #ced4da;
            border-top-right-radius: 4px;
            border-bottom-right-radius: 4px;
        }
    }
`
