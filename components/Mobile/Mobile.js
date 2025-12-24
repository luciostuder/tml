import React from 'react'
import { useState } from 'react';
import Image from 'next/image';

export default function Mobile({info}) {

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
              <div className="w-screen md:w-auto"> {/* Wrapper para evitar limitação */}
                <Image
                  src="/images/4anos.png"
                  alt="4 anos TML"
                  width={500}
                  height={300}
                  className="w-screen md:w-auto"
                />
              </div>
              <div className="text-center p-4 pb-8 text-4xl font-bold">
                Esta é a nossa história
              </div>
            </div>
    
            <div className="relative px-5">
              <div className="relative mt-10">
                <div className="">
                  {info.map((item, index) => (
                    <div key={index} className="">
    
                      {/* Ano */}
                      <div className={`ml-[27px] -mt-2 mr-16 -mb-12 py-20 border-l-8  ${item.ano[0] >= 2021 && 'border-b-8 rounded-bl-[2rem]'} border-yellow-300 `}>
                        <div className="flex flex-row items-start gap-4 -ml-2">
                          <div className="flex flex-row items-center gap-4">
                            <div className="h-2 w-2 bg-black rounded-full"></div>
                            <div className="text-4xl font-bold">{item.ano[0]}</div>
                          </div>
                          <div>{item.ano[1]}</div>
                        </div>
                      </div>
    
    
                      {/* Elementos que só aparecem se o ano for >= 2021 */}
                      {item.ano[0] >= 2021 && (
                        <>
                          {/* Projetos + estruturantes */}
                          <div className="">
                            <div className="flex flex-row items-center text-lg font-semibold p-1 bg-yellow-300 rounded-full w-60 ml-20">
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
                            <div className="flex flex-col gap-2 ml-14 border-yellow-300 p-6 pl-0 -mt-12 pt-12 pb-12 mr-4
                                        rounded-tl-0 rounded-tr-[2rem] rounded-br-[2rem] border-8 border-l-0 
                        ">
                              {item.highlights?.map((highlight, idx) => (
                                <ul key={idx} className="list-disc mt-2 text-sm">
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
                          <div className="ml-[27px] -mt-2 mr-16 p-8 border-8 border-r-0 border-yellow-300 rounded-l-[2rem] ">
    
                            <div className="h-[6ch] relative -top-16 left-10  flex flex-row gap-2">
                              <div className="flex flex-row items-center text-lg font-semibold bg-yellow-300  pl-2 pr-4 rounded-full">
                                <Image
                                  src="images/transacoes.svg"
                                  alt="AML"
                                  width={70}
                                  height={70}
                                />
                                <div className="whitespace-nowrap">A AML</div>
                              </div>
                            </div>
    
                            <div className="relative flex flex-col -left-[74px] pt-0">
                              {item.metricas?.map((metrica, idx) => (
                                <div key={idx} className="relative -top-10 flex flex-row items-center gap-2">
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
    
                          {/* A TML */}
                          <div className="-mt-2 ml-[60px] mr-4 border-8 px-4 pt-2 border-l-0 border-yellow-300 rounded-r-[2rem] ">
                            <div className="flex flex-col gap-2 mt-2">
    
                              {/* A TML */}
                              <div className="w-40 h-[6ch] relative -top-12 ml-48 flex flex-row gap-2">
                                <div className="flex flex-row items-center text-lg font-semibold bg-yellow-300  pl-2 pr-4 rounded-full">
                                  <Image
                                    src="images/TML.svg"
                                    alt="4 anos TML"
                                    width={70}
                                    height={70}
                                  />
                                  <div className="whitespace-nowrap">A TML</div>
                                </div>
                              </div>
    
                              {/* items */}
                              <div className="relative -top-12 left-14 flex flex-col gap-4">
                                {item.tmls?.map((tml, idx) => (
                                  <div key={idx} className="flex flex-row justify-end items-center gap-2">
    
                                    <div className="flex flex-col justify-center items-center w-20">
                                      <div className="text-4xl font-bold">{tml.numero}</div>
                                      <div className="text-xs text-center">{tml.descricao}</div>
                                    </div>
    
                                    <Image
                                      src={`/images/${tml.tml_tipo_svg}`}
                                      alt={tml.descricao}
                                      width={80}
                                      height={80}
                                    />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </>
                      )}
                      <div className={`ml-[27px] -mt-2 mr-16 border-l-8 ${item.ano[0] >= 2021 && 'border-t-8'} border-yellow-300 ${item.ano[0] >= 2020 && 'rounded-tl-[2rem]'} `}>
    
                        {/* Elementos que só aparecem se o ano for >= 2021 */}
                        {item.ano[0] >= 2021 && (
                          <>
                            {/* Atividade */}
                            <div className="mt-8 ml-4 -mr-8 mb-0">
                              <div
                                onClick={() => toggleActive(index, "atividade")}
                                className=" text-lg font-semibold text-white bg-black rounded-full cursor-pointer"
                              >
                                <div className="w-full overflow-hidden">
                                  <div className={`grid grid-cols-[auto,1fr] items-center whitespace-nowrap animate-slide `}
                                  >
                                    <Image
                                      src="images/atividade.svg"
                                      alt="atividade"
                                      width={80}
                                      height={80}
                                    />
                                    <div>
                                      {`Atividade em ${item.ano[0]}`}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative flex flex-row flex-wrap justify-center gap-4 mt-2"
                                // style={{ display: isVisible[0] === index && isVisible[1] === 'atividade' ? 'flex' : 'none' }}
                                style={{ display: 'flex' }}  // Força visível sempre
                              >
                                {item.atividades?.map((atividade, idx) => (
                                  <div key={idx} className="group relative -top-8 flex flex-col flex-wrap items-center mt-2">
                                    <div className="w-[30ch] rounded-t-full rounded-b-none z-10">
                                      <div className="p-2 rounded-full inline-block w-[100%] text-center font-bold bg-[rgb(216,217,214)]">
                                        {atividade.numero} {atividade.descricao}
                                      </div>
                                    </div>
                                    <div 
                                      // className="hidden group-hover:block -mt-4 pt-6 mb-2 p-2 w-[30ch] rounded-xl bg-[#f6f6f5]"
                                      className=" -mt-4 pt-6 mb-2 p-2 w-[30ch] rounded-xl bg-[#f6f6f5]"
                                    >
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
                            <div className="mt-8 ml-4 -mr-8 mb-0">
                              <div
                                onClick={() => toggleActive(index, "acontecimento")}
                                className=" text-lg font-semibold text-white bg-black rounded-full cursor-pointer"
                              >
                                <div className="w-full overflow-hidden">
                                  <div className={`grid grid-cols-[auto,1fr] items-center whitespace-nowrap animate-slide `}
                                  >
                                    <Image
                                      src="images/atividade.svg"
                                      alt="acontecimento"
                                      width={80}
                                      height={80}
                                    />
                                    <div>
                                      {`Aconteceu em ${item.ano[0]}`}
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="relative flex flex-row flex-wrap justify-start gap-4 mt-2 pt-4"
                                //style={{ display: isVisible[0] === index && isVisible[1] === 'acontecimento' ? 'flex' : 'none' }}
                                style={{ display: 'flex' }}  // Força visível sempre
                              >
                                {item.acontecimentos?.map((acontecimento, idx) => (
                                  <div key={idx} className="mb-4">
                                    <div className="flex flex-row items-start justify-start gap-4">
                                      <div className="flex flex-row items-center gap-4">
                                        <div className="h-2 w-2 bg-black rounded-full -ml-[23px]"></div>
                                        <div className="font-bold whitespace-nowrap">{acontecimento.data}</div>
                                      </div>
                                      <div>{acontecimento.descricao}</div>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                  }
                </div >
              </div>
            </div>
    
            <div className="ml-[47px] -mt-2 mr-16 -mb-12 py-20 border-l-8  border-yellow-300"></div>
    
    
    
    </>
  )
}
