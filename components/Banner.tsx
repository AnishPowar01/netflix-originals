import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { baseUrl } from '../constants/movie';
import { Movie } from '../typings'
import {FaPlay} from "react-icons/fa"
import {useRecoilValue,useRecoilState} from 'recoil'
import { modalState, movieState} from '../atoms/modalAtom'
import { InformationCircleIcon } from '@heroicons/react/24/solid';

interface Props{
    netflixOriginals: Movie[]
}

function Banner({netflixOriginals}:Props) {
    const [movie, setMovie] = useState<Movie | null>(null);
    const [currentMovie, setCurrentMovie] = useRecoilState(movieState)
    const [showModal, setShowModal] = useRecoilState(modalState)

    useEffect(()=>{

        setMovie(netflixOriginals[Math.floor(Math.random()* netflixOriginals.length)])
        
    },[netflixOriginals])

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
        <div className="absolute top-0 left-0 -z-10 h-[95vh] w-full">
            <Image
            src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
            layout ="fill"
            objectFit="cover"
            alt="background"/>
        </div>
        <h1 className="text-2xl font-bold  md:text-4xl lg:text-5xl">{movie?.title || movie?.name || movie?.original_name}</h1>

        <p className="max-w-xs text-shadow-md text-xs md:max-w-lg md:text-lg lg:max-w-2xl lg:text-xl ">{movie?.overview}</p>

        <div className="flex space-x-3">
            <button className="banerButton bg-white text-black" onClick={()=>{

                setCurrentMovie(movie) 
                setShowModal(true)
                
            }}><FaPlay className="h-4 w-4 text-black md:h-7 md:w-7"/>Play</button>
            <button className="banerButton bg-[gray]/70">More info <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8"/></button>
        </div>
    </div>
  )
}

export default Banner