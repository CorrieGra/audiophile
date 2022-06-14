import React, { InputHTMLAttributes } from 'react';
import { Render } from '@utils/render';
import { SInput } from './input-styles';

interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    labelLeft?: string;
    labelRight?: string;
}

export const Input: React.FC<IInput> = ({ labelLeft = null, labelRight = null, placeholder = '', ...props }): React.ReactElement => {
    return (
        <div>
            <Render rif={ !!labelLeft || !!labelRight }>
                <div>
                    <p>{ labelLeft }</p>
                    <p>{ labelRight }</p>
                </div>
            </Render>
            <SInput placeholder={ placeholder } { ...props }/>
        </div>
    );
}