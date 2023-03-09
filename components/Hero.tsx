import Image from 'next/image';
import coi from '../public/Photo_profil.jpg';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';

type Props = {}

export default function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Salut, Le nom est Laurentiu GHIGA",
            "Gars-qui-aime-les-abeilles.tsx",
            "<MaisAimeCoderPlus />"
        ],
        loop: true,
        delaySpeed: 2000,
    });
    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <Image className='relative rounded-full h-32 w-32 mx-auto object-cover' src={coi} alt="photo_profil" height={320} width={320} />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    Développeur Web
                </h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>
                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>À propos</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Expérience</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Compétences</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projets</button>
                    </Link>
                </div>
            </div>

        </div>

    )
}