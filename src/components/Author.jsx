import React from 'react';

// React icons
import { BsArrowRight } from 'react-icons/bs';
import { IconContext } from 'react-icons';

// Redux hooks
import { useSelector } from 'react-redux';

export default function Author() {
  const data = useSelector((state) => state.data);
  return (
    <div className="mx-auto max-w-[915px] pl-[20px] text-[#4F4F4F] hover:text-white mt-[30px] relative py-[30px] transition ease-linear delay-[4000] cursor-pointer  bg-white hover:bg-[#333333] ">
      <h2 className="text-inherit text-[24px] leading-[28.18px] font-bold mb-[8px]">
        {data.author}
      </h2>

      <IconContext.Provider value={{ color: 'white' }}>
        <BsArrowRight className="absolute right-[20px] top-[50%] bottom-[50%] translate-y-[-50%]" />
      </IconContext.Provider>
    </div>
  );
}
