import { appConfig } from '@/config/config'
import Image from 'next/image'
import React from 'react'
import BgHeroSection from './componants/Bg-Accueil-hero'
import { Button } from '../ui/button'
import { Mail, FileDown } from 'lucide-react'


export function AccueilHero() {
  return (
    <div className='flex flex-col lg:flex-row justify-start lg:justify-between items-center w-full max-w-full lg:max-w-6xl -mt-10 mx-2 lg:mx-[50px] '>
      {/* gauche */}
      <div className='w-full lg:w-2/3 -mt-8'>
        <div className='flex justify-start items-center mb-8'>
          <div className="bg-gradient-to-r from-orange-200 to-orange-500 w-6 h-6 rounded-full mr-2"></div>
          <h1 className='mt-0  text-sm font-semibold text-gray-500'>{appConfig.nom}<span className='pl-1'>{appConfig.prenom} </span>
          </h1>
        </div>


        <h1 className=' text-4xl font-bold tracking-wide leading-tight' style={{ lineHeight: '1.6' }}>
          Salut, Je suis Mme ABANBDA<br/>née Bella Embolo. Enseignante et <br/>{`chercheur à l'IAI-CAMEROUN`}.
        </h1>



        <div className='flex gap-x-2 mt-14'>
          <Button className='py-6 px-6'><Mail className='mr-2 h-5 w-5' />Me contacter</Button>
          <Button className='py-6 px-6'><FileDown className='mr-2 h-5 w-5' />Télécharger mon cv</Button>
        </div>
      </div>

      {/* droite */}
      <div className='justify-center items-center relative mr-16'>
        <Image
          height={250}
          width={300}
          src={'/images/abanda_dominique2.jpg'}
          alt={`${appConfig.nom} ${appConfig.prenom}`}
          className='rounded-full border-2 border-black relative z-10 -mt-4 h-[400px] w-[300px]'
        />
        <div className='absolute top-0 h- h-[405px] w-[320px] bg-gray-500 rounded-full opacity-30 z-0 -mt-4 -ml-8'></div>
      </div>





      <div className=''>
        <BgHeroSection />
      </div>

    </div>
  )
}

