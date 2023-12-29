"use client";

import React, { useEffect, useState } from 'react';
import { StatusWindow } from './StatusWindow/StatusWindow';

interface User {
  id: string;
  date_created: string | null,
  date_updated: string | null,
  hp: number;
  username: string;
}
interface Data {
  data: User[]
}

export default function Home() {
  const [requestResult, setRequestResult] = useState<Data>({
    "data": [
      {
        "id": "a",
        "date_created": null,
        "date_updated": null,
        "hp": 100,
        "username": "NoName1"
      },
      {
        "id": "b",
        "date_created": null,
        "date_updated": null,
        "hp": 50,
        "username": "NoName2"
      },
      {
        "id": "c",
        "date_created": null,
        "date_updated": null,
        "hp": 10,
        "username": "NoName3"
      }
    ]
  });

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    let myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    let requestOptions: RequestInit = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const url: string = process.env.NEXT_PUBLIC_DIRECTUS_URL + "/items/User"

    fetch(url, requestOptions)
      .then(response => response.text())
      .then(result => setRequestResult(JSON.parse(result)))
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  }

  return (
    <div className='flex justify-center mt-20'>
      <div className='w-80 grid justify-center'>
        <button onClick={getData} className="mb-10 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">更新</button>
        {requestResult.data.map((user) => (
          <StatusWindow user={user} key={user.id} />
        ))}
      </ div>
    </div>
  )
}
