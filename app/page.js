"use client";

import React from 'react'
import useSWR from 'swr'
import Desktop from '@/components/Desktop/Desktop';
import Mobile from '@/components/Mobile/Mobile';


const fetcher = async (url) => {
    const res = await fetch(url)
    if (!res.ok)
        throw new Error(`"Erro" ${res.status}`)
    const data =  await res.json()
    return data
}


export default function Page() {

  //
  // Fetch data
  
  const url = 'api/tml-info'
  const { data: info, error, isLoading } = useSWR(url, fetcher);  

  //
  // Render

  if (error) return <div>Falha ao carregar os produtos. Tente novamente.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!info) return <div>No data available</div>;

  return (
    <>

      <div className="md:hidden">
        <Mobile 
          info={info}
        />
      </div>

      <div className="hidden md:block ">
          <Desktop 
            info={info}
          />
      </div>

    </>
  );
}
