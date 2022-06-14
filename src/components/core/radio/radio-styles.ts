import styled from 'styled-components';

export const RadioContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    max-width: 31rem;
    max-height: 6rem;
    width: 100%;
    height: 100%;
    padding: 1.8rem 2.4rem;
    margin: 1rem 0;

    input[type="checkbox"],
    input[type="radio"] {
        position: relative;
        appearance: none;
        margin-right: 1rem;
        border: .5px solid ${ props => props.theme.light.colours.orange.dark };
        border-radius: 50%;
        padding: 1rem;
        background-clip: content-box;

        &:checked::after { 
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            content: '';
            height: 75%;
            width: 75%;
            border-radius: 50%;
            background-color: ${ props => props.theme.light.colours.orange.dark };
        }
    }
`