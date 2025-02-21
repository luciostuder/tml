"use client";

import Image from 'next/image';
import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data: info, error, isLoading } = useSWR('api/tml-info', fetcher);

  if (error) return <div>Falha ao carregar os produtos. Tente novamente.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!info) return <div>No data available</div>;

  return (
    <div className="mx-auto">


      {/* Header */}
      <div className="flex flex-row items-center bg-[rgb(254,222,2)] w-[100vw] gap-10">
        <Image
          src="/images/4anos.png"
          alt="4 anos TML"
          width={500}
          height={300}
        />
        <div className="text-center text-2xl font-bold">
          Esta é a nossa história
        </div>
      </div>


      {info.map((item, index) => (
        <div key={index} className="p-2">

          {/* Ano */}
          <div className="flex flex-row items-end gap-4">
            <div className="text-4xl font-bold">{item.ano[0]}</div>
            <div>{item.ano[1]}</div>
          </div>

          <div className="flex flex-row gap-2 mt-2">

            {/* Projetos + estruturantes */}
            <div className="mt-4 max-w-[40vw] p-4">
              <div className="flex flex-row items-center text-lg font-semibold p-1 bg-yellow-300 rounded-full w-80">
                <Image
                  src="images/projetos_estruturantes.svg"
                  alt="4 anos TML"
                  width={80}
                  height={80}
                  className="inline-block"
                />
                <div className="flex flex-col items-start">
                  <div className="m-[-3]">Projetos</div>
                  <div className="flex flex-row gap-2 items-center m-[-3]">
                    <Image
                      src="images/bola_mais.svg"
                      alt="bola com mais"
                      width={16}
                      height={16}
                    />
                    estruturantes
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2 ml-14 rounded-b-[2rem] rounded-t-none border-l-4 border-r-4 border-b-4  border-yellow-300 p-3 rounded-2xl">
                {item.highlights?.map((highlight, idx) => (
                  <ul key={idx} className="list-disc pl-5 mt-2 text-sm">
                    <li>
                      {highlight.descricao.split(/(\*[^*]+\*)/g).map((part, idx) =>
                        part.startsWith("*") && part.endsWith("*") ? (
                          <span key={idx} className="font-bold">{part.slice(1, -1)}</span>
                        ) : (
                          part
                        )
                      )}
                    </li>
                  </ul>
                ))}
              </div>
            </div>


            {/* Metricas */}
            <div className="relative mt-4">
              
            
              <div className="relative flex flex-col gap-2 mt-2 border-yellow-300 border-4">
              <div className="absolute mt-4 border-yellow-300 border-4 h-[calc(100%-60px)]"></div>
                {item.metricas?.map((metrica, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-2">
                    <Image
                      src={`/images/${metrica.metrica_tipo_svg}`}
                      alt={metrica.nome}
                      width={80}
                      height={80}
                    />
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-row gap-2 items-center">
                        <div className="text-4xl font-bold">{metrica.numero}</div>
                        <div className="text-xl font-bold">{metrica.grandeza}</div>
                      </div>
                      <div className="text-xs">{metrica.descricao}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* TML */}
          <div className="relative mt-14 ml-14 rounded-[50px] border-4 p-4 border-yellow-300 inline-block">
            <div className="flex flex-row gap-2 mt-2">

              {/* A TML */}
              <div className="relative flex flex-row gap-2 -top-14 -left-14 h-[6ch]">
                <div className="flex flex-row items-center text-lg font-semibold bg-yellow-300 pl-5 pr-10 rounded-full">
                  <Image
                    src="images/TML.svg"
                    alt="4 anos TML"
                    width={70}
                    height={70}
                  />
                  A TML
                </div>
              </div>

              {/* items */}
              <div className="relative -mt-14 -ml-14 flex flex-row gap-8">
                {item.tmls?.map((tml, idx) => (
                  <div key={idx} className="flex flex-col items-center mt-2">
                    <Image
                      src={`/images/${tml.tml_tipo_svg}`}
                      alt={tml.nome}
                      width={50}
                      height={50}
                    />
                    <div className="text-2xl font-bold">{tml.numero}</div>
                    <div className="text-xs max-w-[12ch] text-center">{tml.descricao}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>


          {/* Atividade */}
          <div className="mt-4">
            <div className="flex flex-row items-center text-lg font-semibold text-white bg-black pl-6 rounded-full">
              <Image
                src="images/atividade.svg"
                alt="atividade"
                width={80}
                height={80}
              />
              <div>Atividade</div>
            </div>
            <div className="flex flex-row flex-wrap justify-center gap-4 mt-2">

              {item.atividades?.map((atividade, idx) => (
                <div key={idx} className="flex flex-col flex-wrap items-center mt-2">
                  <div className="w-[30ch] rounded-t-full rounded-b-none bg-gray-100">
                    <div className="p-2 rounded-full inline-block w-[100%] text-center font-bold bg-[rgb(216,217,214)]">
                      {atividade.numero} {atividade.descricao}
                    </div>
                  </div>
                  <div className="mb-2 p-2 inline-block w-[30ch] rounded-t-none rounded-b-xl bg-[#f6f6f5]">
                    {atividade.topicos?.map((topico, idx) => (
                      <div key={idx}>
                        {topico.descricao != "" && (
                          <div className="font-bold">{topico.descricao}</div>
                        )}
                        <ul className="list-disc pl-5 text-sm">
                          {topico.items?.map((item, idx) => (
                            <li key={idx}>{item.descricao}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ))
      }
    </div >
  );
}
