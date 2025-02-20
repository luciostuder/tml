"use client";

import React from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Page() {
  const { data: info, error, isLoading } = useSWR('api/tml-info', fetcher);

  if (error) return <div>Falha ao carregar os produtos. Tente novamente.</div>;
  if (isLoading) return <div>Loading...</div>;
  if (!info) return <div>No data available</div>;

  return (
    <div className="p-2">
      {info.map((item, index) => (
        <div key={index}>

          {/* Ano */}
          <div className="flex flex-row items-end gap-4">
            <div className="text-4xl font-bold">{item.ano[0]}</div>
            <div>{item.ano[1]}</div>
          </div>

          <div className="flex flex-row gap-2 mt-2">

            {/* Projetos + estruturantes */}
            <div className="mt-4 max-w-[40vw]">
              <div className="text-lg font-semibold bg-yellow-300 p-5 rounded-full inline-block">Projetos + estruturantes</div>
              <div className="flex flex-col gap-2 mt-2">
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
            <div className="mt-4">
              <div className="flex flex-col gap-2 mt-2">
                {item.metricas?.map((metrica, idx) => (
                  <div key={idx} className="flex flex-row items-center gap-2 mt-2">
                    <div><div class="w-16 h-16 bg-yellow-300 rounded-full"></div></div>
                    <div>
                      <div className="flex flex-row gap-2 mt-2 items-end">
                        <div className="text-4xl font-bold">{metrica.numero}</div>
                        <div className="text-xl font-bold">{metrica.grandeza}</div>
                      </div>
                      <div className="text-sm">{metrica.descricao}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* TML */}
          <div className="mt-4">
            <div className="flex flex-row gap-2 mt-2">
              <div>
                <div className="text-lg font-semibold bg-yellow-300 p-5 rounded-full inline-block">A TML</div>
              </div>
              {item.tmls?.map((tml, idx) => (
                <div key={idx} className="flex flex-col items-center mt-2">
                  <div className="mb-2"><div class="w-8 h-8 bg-yellow-300 rounded-full"></div></div>
                  <div className="text-2xl font-bold">{tml.numero}</div>
                  <div className="text-xs max-w-[20ch] text-center">{tml.descricao}</div>
                </div>
              ))}
            </div>
          </div>



          {/* Atividade */}
          <div className="mt-4">
            <div className="text-lg font-semibold text-white bg-black p-3 pl-6 rounded-full">Atividade</div>
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
