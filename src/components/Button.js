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
        ${props.outline && css`
            background: none;
            border: 1px solid ${color};
            color: ${color};
            &:hover {
                background: ${color};
                color: #fff;
            }
            &:active {
                background: ${darken(0.1, color)};
            }
        `}
    `;
}

const sizes = {
    large: {
        height: '3rem',
        fontSize: '1.25rem'
    },
    medium: {
        height: '2.25rem',
        fontSize: '1rem'
    },
    small: {
        height: '1.75rem',
        fontSize: '0.875rem'
    },
}

const sizeSyles = ({ size }) => {
    return css`
        height: ${sizes[size].height};
        font-size: ${sizes[size].fontSize};
    `;
}

const fullWidthStyles = css`
    ${props => props.fullWidth && css`
        width: 100%;
        justify-content: center;
        &:not(:first-child) {
            margin-left: 0;
            margin-top: 1rem;
        }
    `}
`;


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

    &:not(:first-child) {
        margin-left: 1rem;
    }
    
    ${colorStyles}
    ${sizeSyles}
    ${fullWidthStyles}
`;


function Button({ children, color, size, outline, fullWidth, ...res }) {
    return <StyledButton color={color} size={size} outline={outline} fullWidth={fullWidth} {...res}>{children}</StyledButton>
};

Button.defaultProps = {
    color: 'green',
    size: 'medium',
}

export default Button;