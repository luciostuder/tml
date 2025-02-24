"use client";

import React from 'react'
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import Image from 'next/image';


const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});

export default function PlotIndicador({ indicador }) {

  const data = {
    labels: indicador.medicoes.map(m => m.ano.ano),
    datasets: [
      {
        label: indicador.unidade + ' ' + indicador.descricao,
        data: indicador.medicoes.map(m => m.valor),
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
        text: `${indicador.nome}`, // Título do gráfico
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
          text: indicador.unidade ? indicador.unidade : '' + ' ',
        },
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center pt-8">
      <div className="flex flex-row justify-center items-center">
        <Image
          src={`/images/${indicador.imagem.split('/')[3]}`}
          alt={indicador.descricao}
          width={20}
          height={20}
        />
        <h1 className="text-xl" >{indicador.nome}</h1>
      </div>
      <Bar data={data} options={options} width={undefined} height={undefined} />
      <div>{indicador.descricao}</div>
    </div>
  )
}