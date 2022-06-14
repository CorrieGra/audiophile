import React from 'react';

interface IRenderProps {
    rif: boolean;
    fallback?: any;
    children?: React.ReactNode;
}

export const Render: React.FC<IRenderProps> = ({ rif, fallback, children = null }): any => {
    return rif ? children : fallback;
}