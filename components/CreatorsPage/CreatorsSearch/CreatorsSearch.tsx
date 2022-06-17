import Avartar from "$components/Avartar/Avartar";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { CreatorSearchProps } from "./CreatorsSearch.types";

const CreatorsSearch : FC<CreatorSearchProps> = ({creators}) => {
  return (
    <section className="w-full overflow-x-hidden">
      {!creators.length ?
       <p className="w-full text-sm md:text-base text-opacity-60 font-light px-9 py-4 border-xs border-opacity-10 border-gray3">No creators found matching</p> : 
        <>
          <p className="mb-6 text-black font-semibold text-center md:text-left">Results for “Lilydusk”</p>
          <div className="w-full border-xs border-opacity-10 border-gray3">
            {creators.map((creator, index) => (
              <div className={`w-full ${index === creators.length - 1 ? '' : ' border-b-xs border-opacity-10 border-b-gray3' }`} key={index}>
                <Link href={'/creators/' + creator.id}>
                  <a className="bg-white w-full overflow-hidden flex flex-col md:flex-row items-center justify-between gap-5 px-8 py-9">
                    <div className="flex flex-col md:flex-row items-center gap-5">
                      <Avartar sizeClassNames="w-20 h-20" src={creator.image} />
                      <div className="text-center md:text-left">
                        <p className="text-base md:text-lg font-semibold text-black mb-1">{creator.name}</p>
                        <p className="text-black text-opacity-60 text-sm font-normal mb-1">{creator.description}</p>
                        <div className="flex flex-wrap justify-center md:justify-start">
                          {creator.tags.map((tag, index) => <p key={index} className="text-black font-light text-opacity-50 text-xs">{tag} {index !== creator.tags.length - 1 ? ', ' : ''}</p>)}
                        </div>
                    </div>
                    </div>
                    <div>
                      <p className="flex flex-col">
                        <span className="text-black font-semibold text-base">{creator.patronCount}</span>
                        <span className="uppercase text-xs text-black text-opacity-60 font-normal">patrons</span>
                      </p>
                    </div>
                  </a>
                </Link>
              </div>
              ))}
         </div>
        </>
       }

    </section>
  )
}

export default CreatorsSearch;
