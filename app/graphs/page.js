"use client";

import React from 'react'
import useSWR from 'swr'
import Image from 'next/image';
import PlotIndicador from '@/components/PlotIndicador/PlotIndicador';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {

  //
  // Fetch data
  const { data: dominios, error, isLoading } = useSWR('/api/dominios', fetcher);


  

  //
  // Render
  if (error) return <div>Falha ao carregar os dominios. Tente novamente. Erro: {error.message}</div>;
  if (isLoading) return <div>A carregar dominios...</div>;
  if (!dominios || dominios.length === 0) return <div>Nenhum dado disponível para dominios.</div>;


  return (
    <div className="">
      <div className="fixed top-0 left-0 w-full p-10 mb-10 flex flex-row justify-center items-center bg-gray-50 z-10">
        <Image
          src="/images/TML_text.svg"
          alt="TML"
          width={300}
          height={100}
        />
      </div>

      <div className="pt-[190px] p-10 flex flex-col justify-center items-center">
        {dominios.map((dominio, index) => (
          <div>
            <h2 className="text-xl font-bold text-center">{dominio.nome}</h2>
            <div key={index} className="mb-10 flex flex-row flex-wrap gap-20 justify-center items-center">
              {dominio.indicadores.map((indicador, index) => (
                <div key={index} className="mb-10">
                  <PlotIndicador 
                    indicador={indicador} 
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    </div >
  );
}
