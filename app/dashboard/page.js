"use client";

import React from 'react'
import useSWR from 'swr'
import Image from 'next/image';
import PlotMetrica from '@/components/PlotMetrica/PlotMetrica';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {

  //
  // Fetch data
  const { data: metricas, error, isLoading } = useSWR('/api/metricas', fetcher);
 
  //
  // Fetch data
  const { data: metricasTml, errorTml, isLoadingTml } = useSWR('/api/metricas-tml', fetcher);

  //
  // Render
  if (error) return <div>Falha ao carregar as métricas. Tente novamente. Erro: {error.message}</div>;
  if (isLoading) return <div>Carregando métricas...</div>;
  if (!metricas || metricas.length === 0) return <div>Nenhum dado disponível para métricas.</div>;

  if (errorTml) return <div>Falha ao carregar as métricas TML. Tente novamente. Erro: {errorTml.message}</div>;
  if (isLoadingTml) return <div>Carregando métricas TML...</div>;
  if (!metricasTml || metricasTml.length === 0) return <div>Nenhum dado disponível para métricas TML.</div>;


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
        {metricas.map((metrica, index) => (
          <div key={index} className="mb-10">
            <PlotMetrica info={metrica} />
          </div>
        ))}
      </div>

      <div className="pt-[190px] p-10 flex flex-col justify-center items-center">
        {metricasTml.map((metrica, index) => (
          <div key={index} className="mb-10">
            <PlotMetrica info={metrica} />
          </div>
        ))}
      </div>

    </div>
  );
}
