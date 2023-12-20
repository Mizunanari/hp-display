"use client";

import React from 'react';
import HitpointBar from '../HitPointBar/HitpointBar';

interface StatusWindowProps {
    user: {
        id: string,
        username: string,
        hp: number
    }
}

export const StatusWindow: React.FC<StatusWindowProps> = ({ user }) => {
    const maxHP = 100;
    return (
        <div className='p-2 mt-2 mb-2 rounded bg-white grid' >
            <div className='text-black' >{user.username}</div>
            <HitpointBar hp={user.hp} maxHp={maxHP} />
            <div className='text-black justify-self-end'>{user.hp} / {maxHP}</div>
        </div>
    );
};