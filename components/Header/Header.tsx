import React from 'react';
import { appConfig } from "@/config/config";
import { Separator } from "@/components/ui/separator";
import ElementHeader from './Components/Element';
import { Mail } from "lucide-react";
import { Phone } from "lucide-react";
import { MapPinned } from "lucide-react";
// import { Mail } from "lucide-react";
// import { Mail } from "lucide-react";


export function Header() {
  return (
    <div className='hidden lg:block mx-20'>
      <div className='flex justify-between items-center py-6'>
        {/* nom et prenom */}
        <div className=''>
          <h1 className='font-semibold text-sm lg:text-[24px]'>
            {appConfig.nom}
            <span className='font-bold pl-2 text-orange-500'>
              {appConfig.prenom}
            </span>
          </h1>
        </div>



        {/* a gauche */}
        <div className='flex gap-x-5'>
          <ElementHeader icon={<Mail />} title={'E-mail'} value={appConfig.email} />
          <ElementHeader icon={<Phone />} title={'Téléphone'} value={appConfig.telephone} />
          <ElementHeader icon={<MapPinned />} title={'Localisation'} value={appConfig.localisation} />
        </div>
      </div>
      <Separator />
    </div>
  );
}
