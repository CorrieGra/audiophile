import styled from "styled-components";

export const SInput = styled.input`
    max-width: 31rem;
    max-height: 6rem;
    width: 100%;
    height: 100%;
    padding: 1.8rem 2.4rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid gray;
    caret-color: ${ props => props.theme.light.colours.orange.dark };

    &:focus {
        border-color: ${ props => props.theme.light.colours.orange.dark };
    }

    &:invalid {
        border-color: red;
        caret-color: red;
    }
`;