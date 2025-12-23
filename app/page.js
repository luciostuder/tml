"use client";

import React from 'react'
import useSWR from 'swr'
import Desktop from '@/components/Desktop/Desktop';
import Mobile from '@/components/Mobile/Mobile';
import Link from 'next/link';


const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {

  //
  // Fetch data
  const { data: info, error, isLoading } = useSWR('data/tml-info.json', fetcher);  // pôr "api/tml-info" para usar api

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
