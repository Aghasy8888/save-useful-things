import React from 'react';
import Login from './Login';
import { ProfileProps } from './Profile';

type PrivateProps = {
    isLoggedIn: boolean
    Component: React.ComponentType<ProfileProps>
}

export default function Private({isLoggedIn, Component}: PrivateProps) {

    if (isLoggedIn) {
       return <Component name="Aghasy"/> 
    } else {
        return <Login />
    }
}
