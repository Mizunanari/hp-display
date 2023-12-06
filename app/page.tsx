"use client";

import React, { useEffect, useState } from 'react';
import { StatusWindow } from './StatusWindow/StatusWindow';

export default function Home() {

  const [requestResult, setRequestResult] = useState({
    "data": [
      {
        "user_id": "a",
        "date_created": null,
        "date_updated": null,
        "HP": 100,
        "username": "NoName1"
      },
      {
        "user_id": "b",
        "date_created": null,
        "date_updated": null,
        "HP": 50,
        "username": "NoName2"
      },
      {
        "user_id": "c",
        "date_created": null,
        "date_updated": null,
        "HP": 10,
        "username": "NoName3"
      }
    ]
  });

  useEffect(() => {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    let requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://directus.mizunanari.com/items/User", requestOptions)
      .then(response => response.json())
      .then(data => {
        setRequestResult(data);
      })
      .catch(error => {
        error.log('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {requestResult.data.map((user) => (
        <StatusWindow hp={user.HP} maxHp={100} username={user.username} key={user.user_id} />
      ))}
    </ div>
  )
}
