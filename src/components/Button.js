import React from 'react';
import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';

const colorStyles = (props) => {
    const color = props.theme.palette[props.color];

    return css`
        background: ${color};
        &:hover {
            background: ${lighten(0.1, color)};
        }
        &:active {
            background: ${darken(0.1, color)};
        }
    `;
}

// scss 문법 사용 가능
const StyledButton = styled.button`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    outline: none;
    border: none;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    padding: 0 1rem;

    height: 2.25rem;
    font-size: 1rem;

    ${colorStyles}

    & + & {
        margin-left: 1rem;
    }
`;


function Button({ children, color, size, ...res }) {
    return <StyledButton color={color} {...res}>{children}</StyledButton>
};

Button.defaultProps = {
    color: 'green',
}

export default Button;