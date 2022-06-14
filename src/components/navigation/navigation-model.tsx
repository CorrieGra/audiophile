import React from "react";

interface INavigationModelItem {
    name: string;
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

interface INavigationModel {
    [key: string]: INavigationModelItem;
}

const NavigationModel: INavigationModel = {
    home: {
        name: 'home',
        path: {
            parent: '/',
        },
        element: {
            parent: <h1>Home</h1>
        },
    },
    headphones: {
        name: 'headphones',
        path: {
            parent: '/headphones',
            child: '/headphones/:id'
        },
        element: {
            parent: <h1>Headphones</h1>,
            child: <h1>Headphones Child</h1>,
        }
    },
    speakers: {
        name: 'speakers',
        path: {
            parent: '/speakers',
            child: '/speakers/:id'
        },
        element: {
            parent: <h1>Speakers</h1>,
            child: <h1>Speakers Child</h1>,
        }
    },
    earphones: {
        name: 'earphones',
        path: {
            parent: '/earphones',
            child: '/earphones/:id'
        },
        element: {
            parent: <h1>Earphones</h1>,
            child: <h1>Earphones Child</h1>,
        }
    },
};

const keysOfNavigationModel = Object.keys(NavigationModel);

export {
    keysOfNavigationModel,
    NavigationModel,
}