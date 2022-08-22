import React from 'react';

// React icons
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';

export default function Author() {
  return (
    <div className="mx-auto max-w-[915px] pl-[20px] text-[#4F4F4F] hover:text-white mt-[30px] relative py-[30px] transition ease-linear delay-[4000] cursor-pointer  bg-white hover:bg-[#333333] ">
      <h2 className="text-inherit text-[24px] leading-[28.18px] font-bold mb-[8px]">Bill Gates</h2>
      <p className="text-[14px] hover:text-[#828282] font-medium leading-[16.44px] text-[#828282]">
        business
      </p>
      <IconContext.Provider value={{ color: 'white' }}>
        <BsArrowRight className="absolute right-[20px] top-[50%] bottom-[50%] translate-y-[-50%]" />
      </IconContext.Provider>
    </div>
  );
}
