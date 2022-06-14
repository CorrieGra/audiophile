import React from 'react';

export interface IRoute {
    path: {
        parent: string;
        child?: string;
    },
    element: {
        parent: any;
        child?: any;
    };
    icon?: string;
}

export const routes: IRoute[] = [
    {
        path: {
            parent: '/',
        },
        element: {
            parent: <h1>Home</h1>
        },
    },
    {
        path: {
            parent: '/headphones',
            child: '/headphones/:id'
        },
        element: {
            parent: <h1>Headphones</h1>,
            child: <h1>Headphones Child</h1>,
        }
    },
    {
        path: {
            parent: '/speakers',
            child: '/speakers/:id'
        },
        element: {
            parent: <h1>Speakers</h1>,
            child: <h1>Speakers Child</h1>,
        }
    },
    {
        path: {
            parent: '/earphones',
            child: '/earphones/:id'
        },
        element: {
            parent: <h1>Earphones</h1>,
            child: <h1>Earphones Child</h1>,
        }
    },
]