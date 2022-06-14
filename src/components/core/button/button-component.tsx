import React, { ButtonHTMLAttributes } from "react";
import * as sComponents from './button-styles';

type TButtonVariant = 'Button' | 'OutlinedButton' | 'TransparentButton' | undefined;

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: TButtonVariant;
    text?: string;
}

export const Button: React.FC<IButtonProps> = ({ variant = 'Button', text, children = null, ...props }) => {
    const ButtonComponent = sComponents[variant];

    return (
        <ButtonComponent { ...props }>
            {
                (!!text && !children) ? text : children 
            }
        </ButtonComponent>
    );
}