"use client";

import React from 'react';
import HitpointBar from '../HitPointBar/HitpointBar';

interface StatusWindowProps {
    hp: number;
    maxHp: number;
    username: string;
}

export const StatusWindow: React.FC<StatusWindowProps> = ({ hp, maxHp, username }) => {
    return (
        <div className='m-4 w-80 grid justify-center'>
            <div >{username}</div>
            <HitpointBar hp={hp} maxHp={maxHp} />
            <div className='justify-self-end'>{hp} / {maxHp}</div>
        </div>
    );
};