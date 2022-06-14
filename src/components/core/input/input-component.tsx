import React, { InputHTMLAttributes } from 'react';
import { Render } from '@utils/render';
import { SInput } from './input-styles';

type TInput = 'text' | 'number' | 'email' | 'password';
interface IInput extends InputHTMLAttributes<HTMLInputElement> {
    labelLeft?: string;
    labelRight?: string;
    type?: TInput;
}

export const Input: React.FC<IInput> = ({ labelLeft = null, labelRight = null, placeholder = '', type = 'text', ...props }): React.ReactElement => {
    return (
        <div>
            <Render rif={ !!labelLeft || !!labelRight }>
                <div>
                    <p>{ labelLeft }</p>
                    <p>{ labelRight }</p>
                </div>
            </Render>
            <SInput type={ type } placeholder={ placeholder } { ...props }/>
        </div>
    );
}