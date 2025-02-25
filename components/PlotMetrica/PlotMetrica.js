"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import Image from 'next/image';


const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

export default function PlotMetrica({ info }) {

  const data = {
    labels: info.anos,
    datasets: [
      {
        label: info.grandeza + ' ' + info.descricao,
        data: info.numeros,
        backgroundColor: 'rgba(253, 224, 71, 0.6)',
        borderColor: 'rgba(253, 224, 71, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
 //   maintainAspectRatio: false, // Garante que o gráfico se ajuste ao contêiner
    plugins: {
      legend: {
        display: false, // Exibe a legenda
        position: "top",
      },
      title: {
        display: false,
        text: `${info.tipo}`, // Título do gráfico
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ano",
        },
      },
      y: {
        title: {
          display: true,
          text: info.grandeza + ' ' + info.descricao,
        },
      },
    },
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        <Image
          src={`/images/${info.icon}`}
          alt={info.descricao}
          width={20}
          height={20}
        />
        <h1>{info.tipo}</h1>
      </div>
      <div>
        <Bar data={data} options={options}  width={undefined} height={undefined} />
      </div>
    </div>
  )
}