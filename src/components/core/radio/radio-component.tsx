import React, { InputHTMLAttributes } from 'react';
import { RadioContainer } from './radio-styles';

type TRadioType = 'checkbox' | 'radio' | undefined;
interface IRadioProps extends InputHTMLAttributes<HTMLInputElement> {
    text: string;
    type?: TRadioType;
}

export const Radio: React.FC<IRadioProps> = ({ value, text, type = 'checkbox' }): React.ReactElement => {
    return (
        <RadioContainer>
            <input type={ type } value={ value } />
            <p>{ text }</p>
        </RadioContainer>
    );
}