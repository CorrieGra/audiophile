import styled from "styled-components";

const Button = styled.button`
    padding: 1.5rem 3rem;
    margin: 1rem 0;
    text-transform: uppercase;
    text-align: center;
    border: none;
    background-color: ${ props => props.theme.light.colours.orange.dark };
    color: ${ props => props.theme.light.colours.white };
    cursor: pointer;

    &:hover { background-color: ${ props => props.theme.light.colours.orange.light }; }
`;

const OutlinedButton = styled(Button)`
    background-color: ${ props => props.theme.light.colours.white };
    color: ${ props => props.theme.light.colours.black.dark };
    border: 1px solid ${ props => props.theme.light.colours.black.dark };

    &:hover { 
        background-color: ${ props => props.theme.light.colours.black.dark };
        color: ${ props => props.theme.light.colours.white };
    }
`;

const TransparentButton = styled(Button)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    background-color: ${ props => props.theme.light.colours.white } !important;
    color: ${ props => props.theme.light.colours.black.dark };

    &:hover { color: ${ props => props.theme.light.colours.orange.dark }; }
`;

export {
    Button,
    OutlinedButton,
    TransparentButton,
}