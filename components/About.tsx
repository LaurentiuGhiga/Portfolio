import React from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';
import coi from '../public/Photo_profil.jpg';
import BeeDev from '../public/BeeDev_symbol.jpg'
type Props = {}

export default function About({ }: Props) {
    return (
        /**<motion.div
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
             className='flex flex-col relative text-center md:text-left md:flex-row h-screen max-w-7xl px-10 justify-evenly mx-auto items-center '
             >
             <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                 À propos
             </h3>
             <motion.div
                 initial={{
                     x: -200,
                     opacity: 0
                 }}
                 transition={{
                     duration: 1.2,
                 }}
                 whileInView={{
                     opacity: 1,
                     x: 0
                 }}
                 viewport={{ once: true }}
                 className="absolute top-80 w-60 h-60"
             >
                 <Image className=" relative rounded-full h-32 w-32 mx-auto object-cover" src={coi} alt='Photo Profil' />
             </motion.div>
             <div className=' space-y-10 px-0 md:px-10 mb-0 '>
                 <h4 className='text-4xl font-semibold'>Voici un <span className='underline decoration-[#F7AB0A]/50'> petit</span> historique</h4>
                 <p className='text-base pb-6'>Ancien ingénieur en hydro-énergie j’ai décidé d’entamer une reconversion professionnelle pour revenir à ma première passion : le développement.
 
                     Après avoir fait polytechnique en Roumaine, j’ai travaillé dans une centrale hydro-électrique à Bucarest en tant que ingénieur en énergie, ce qui m’a permis d’acquérir diverses compétences : une soif de apprendre, des compétences en communication, une vision business.
 
                     En 2014, j’ai décidé de quitter la Roumanie pour la France avec comme objectif de devenir Développeur !
 
                     Ne parlant pas français, j’ai décidé de m’intégrer en occupant différents postes, progressivement en fonction des les besoins linguistiques dans l’agriculture, l’agroalimentaire, l’industrie automobile, tout en suivant différentes formations en ligne sur le Développement.</p>
             </div>
 
 
         </motion.div>  **/



        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="overflow-hidden flex flex-col relative h-screen max-w-7xl px-10 justify-evenly mx-auto sapce-y-50 text-center items-center md:text-left md:flex-row shadow-md ">

            <h3 className=' absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl '>
                À propos
            </h3>

            <motion.div
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0
                }}
                viewport={{ once: true }}
                className="flex-shrink-0">
                <Image className="hidden lg:block xl:mt-[140px]  xl:mb-20  md:mb-0 flex-shrink-0 md:rounded-lg  xl:w-[500px] xl:h-[500px] rounded-full h-56 w-56 my-auto object-cover mt-32 " src={coi} alt="Photo_profil" />
            </motion.div>
            <div className="p-8 text-sm">
                <h4 className="text-4xl font-semibold">Voici un <span className='underline decoration-wavy decoration-2 decoration-[#F7AB0A]/50'> un petit</span> HISTORIQUE</h4>
                <p className="mt-4 text-base ">Je suis Laurentiu <Image className='inline-block w-5 h-5 ml-0 mr-2 ' src={BeeDev} alt="photo_hero" />
                    Vous pourriez aussi me connaître sous le nom de BeeDev.</p>
                <p>Je suis un développeur web passionné, ayant commencé ma carrière dans l&apos;industrie de l&apos;hydro-énergie. Après avoir obtenu mon diplôme d&apos;ingénieur en Roumanie, j&apos;ai travaillé sur des projets de centrales hydro-électriques à Bucarest, acquérant ainsi des compétences en résolution de problèmes complexes, en communication et en gestion de projet.</p>

                <p>Cependant, j&apos;ai rapidement réalisé que ma vraie passion était le développement web. J&apos;ai alors décidé de me lancer dans une reconversion professionnelle, en commençant par occuper différents postes dans des secteurs tels que l&apos;agriculture, l&apos;agroalimentaire et l&apos;industrie automobile pour acquérir de nouvelles compétences.

                    Au fil du temps, j&apos;ai suivi différentes formations en ligne pour approfondir mes connaissances en développement web. Aujourd&apos;hui, je suis fier de mes compétences en programmation et de ma capacité à créer des solutions innovantes pour des problèmes complexes.</p>
                <p>Je suis constamment à la recherche de nouveaux défis et de projets passionnants qui me permettent de continuer à évoluer en tant que développeur web.</p>
            </div>

        </motion.div>
    )
}
