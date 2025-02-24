import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

export default function Desktop({info}) {

  //
  // define states and variables

  const [isVisible, setIsVisible] = useState([-1, ""]);

  //
  // Event Handlers

  function toggleActive(index, tipo) {
    if (index == isVisible[0] && tipo === isVisible[1]) {
      setIsVisible([-1, tipo]);
    } else {
      setIsVisible([index, tipo]);
    }
  }

  return (
    <>
        {/* Header */}
        <div className="bg-[rgb(254,222,2)]">
          <div className="mx-auto max-w-[1200px] md:grid md:grid-cols-[auto,1fr] bg-[rgb(254,222,2)] gap-5">
            <div className="w-screen md:w-auto"> {/* Wrapper para evitar limitação */}
              <Image
                src="/images/4anos.png"
                alt="4 anos TML"
                width={500}
                height={300}
                className="w-screen md:w-auto"
              />
            </div>
            <div className="flex justify-center items-center pb-8 md:pb-0 text-4xl font-bold md:pr-10">
              Esta é a nossa história
            </div>
          </div>
        </div>


        <div className="relative mx-auto max-w-[1200px] px-10">

          <div className="relative mt-10 ml-60">

            {/* Timeline */}
            <div className="absolute top-5 h-[calc(100%-5px)] border-[6px] border-yellow-300 z-[-10]"></div>

            <div className="">
              {info.map((item, index) => (
                <div key={index} className="mb-20">

                  {/* Ano */}
                  <div className="flex flex-row items-center gap-4">
                    <div className="h-3 w-3 bg-black rounded-full"></div>
                    <div className="flex flex-row items-end gap-4">
                      <div className="text-4xl font-bold">{item.ano[0]}</div>
                      <div>{item.ano[1]}</div>
                    </div>
                  </div>

                  {/* Elementos que só aparecem se o ano for >= 2021 */}
                  {item.ano[0] >= 2021 && (
                    <>
                      <div className="flex flex-row gap-2 mt-2 ml-24">

                        {/* Projetos + estruturantes */}
                        <div className="mt-4 max-w-[40vw] p-4">
                          <div className="flex flex-row items-center text-lg font-semibold p-1 bg-yellow-300 rounded-full w-[270px]">
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
                          <div className="flex flex-col gap-2 ml-14 border-yellow-300 p-3 pt-0 mt-0
                                     rounded-br-[2rem] border-r-4 border-b-4  
                                    border-t-0 border-l-4 rounded-t-none rounded-bl-[2rem] 
                    ">
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
                        <div className="relative mt-4 -ml-4 mb-0">


                          <div className="relative flex flex-col mt-2">
                            <div className="h-[calc(100%-80px)] w-[55px] absolute top-[40px] -left-[13px] border-yellow-300 rounded-b-none border-t-4 border-l-4 border-r-4 rounded-full z-[-10]"></div>
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
                      <div className="relative mt-10 ml-[10.3rem] rounded-[50px] border-4 p-4 border-yellow-300 inline-block">
                        <div className="flex flex-row gap-2 mt-2">

                          {/* A TML */}
                          <div className="relative flex flex-row gap-2 -top-14 -left-[4.5rem] h-[6ch]">
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
                      <div className="mt-8  ml-[7rem]">
                        <div
                          onClick={() => toggleActive(index, "atividade")}
                          className=" text-lg font-semibold text-white bg-black pl-6 rounded-full cursor-pointer"
                        >
                          <div className="w-full overflow-hidden">
                            <div className={`grid grid-cols-[auto,1fr] items-center whitespace-nowrap animate-slide`}
                            >
                              <Image
                                src="images/atividade.svg"
                                alt="atividade"
                                width={80}
                                height={80}
                              />
                              <div>
                                {`${!isVisible !== index ? 'Atividade da TML em ' + item.ano[0] : 'Atividade'}`}   {/*    ' em ' + item.ano[0].  */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="relative flex flex-row flex-wrap justify-center gap-4 mt-2"
                          style={{ display: isVisible[0] === index && isVisible[1] === 'atividade' ? 'flex' : 'none' }}
                        >

                          {item.atividades?.map((atividade, idx) => (
                            <div key={idx} className="group relative -top-8 flex flex-col flex-wrap items-center mt-2">
                              <div className="w-[30ch] rounded-t-full rounded-b-none z-10">
                                <div className="p-2 rounded-full inline-block w-[100%] text-center font-bold bg-[rgb(216,217,214)]">
                                  {atividade.numero} {atividade.descricao}
                                </div>
                              </div>
                              <div className="hidden group-hover:block -mt-4 pt-6 mb-2 p-2 w-[30ch] rounded-xl bg-[#f6f6f5]">
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
                    </>
                  )}

                  {item.acontecimentos && item.acontecimentos.length > 0 && (
                    <>
                      {/* Acontecimentos */}
                      <div className="mt-8  ml-[7rem]">
                        <div
                          onClick={() => toggleActive(index, "acontecimento")}
                          className=" text-lg font-semibold text-white bg-black pl-6 rounded-full cursor-pointer"
                        >
                          <div className="w-full overflow-hidden">
                            <div className={`grid grid-cols-[auto,1fr] items-center whitespace-nowrap ${isVisible !== index ? "animate-slide" : ""}`}
                            >
                              <Image
                                src="images/atividade.svg"
                                alt="atividade"
                                width={80}
                                height={80}
                              />
                              <div>
                                {`${!isVisible !== index ? 'Acontecimentos da TML em ' + item.ano[0] : 'Acontecimentos'}`}   {/*    ' em ' + item.ano[0].  */}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="relative flex flex-row flex-wrap justify-start gap-4 mt-2 pt-4"
                          style={{ display: isVisible[0] === index && isVisible[1] === 'acontecimento' ? 'flex' : 'none' }}
                        >
                          {item.acontecimentos?.map((acontecimento, idx) => (
                            <div key={idx} className="-ml-100 w-60">
                              <div className="flex flex-row items-center justify-start gap-4">
                                <div className="h-2 w-2 bg-black rounded-full -ml-[20px]"></div>
                                <div className="w-[110px]"><hr className="w-full border-t-2 border-black"></hr></div>
                                <div className="font-bold">{acontecimento.data}</div>
                               
                              </div>
                              <div>{acontecimento.descricao}</div>
                            </div>

                          ))}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))
              }
            </div >
          </div>
        </div>
    </>
  )
}
