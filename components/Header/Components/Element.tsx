import React from 'react';

interface ElementHeaderProps {
  icon: React.ReactNode;
  title: string;
  value: string;
}

const ElementHeader: React.FC<ElementHeaderProps> = ({ icon, title, value }) => {
  return (
    <div className="flex items-center">
      <div className="mr-1.5 text-orange-500 -mt-0.5">{icon}</div>
      <div className='flex items-center justify-center gap-x-2 text-center text-sm' >
        <h3 className="font-semibold ">{title} : </h3>
        <p className='-pt-0.5'>{value}</p>
      </div>
    </div>
  );
};

export default ElementHeader;
