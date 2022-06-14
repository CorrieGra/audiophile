import React from 'react';
import { RadioContainer } from './radio-styles';

export const Radio: React.FC = (): React.ReactElement => {
    return (
        <RadioContainer>
            <input type='radio' value='nothing' />
            <p>Nothing</p>
        </RadioContainer>
    );
}