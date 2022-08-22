import React from 'react';

// React icons
import { AiOutlineReload } from 'react-icons/ai';

const Reload = () => {
  return (
    <div className="flex justify-center items-center gap-[2px] cursor-pointer sm:justify-end pr-[15px]">
      <p className="text-[18px] font-normal text-[#4F4F4F] leading-[21.6px]">random</p>
      <div>
        <AiOutlineReload size={15} />
      </div>
    </div>
  );
};

export default Reload;
