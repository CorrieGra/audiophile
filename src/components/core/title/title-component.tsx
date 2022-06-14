import React from 'react';

import * as sComponents from './title-styles';

type TVariant = "t1" | "t2" | 't3' | 't4' | 't5' | 't6' | 'overline' | 'subTitle';

interface ITitleProps {
    variant: TVariant;
    text: string;
    style?: React.StyleHTMLAttributes<{}>;
}

export const Title: React.FC<ITitleProps> = ({ variant, text, ...rest }): React.ReactElement => {
    const Title = sComponents[variant];

    return (
        <Title { ...rest }>{ text }</Title>
    );
}