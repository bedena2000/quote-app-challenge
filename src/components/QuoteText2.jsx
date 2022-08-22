import React from 'react';

export default function QuoteText2({ quote }) {
  return (
    <div className="mx-auto font-medium text-[14px] sm:text-[36px] sm:leading-[43.2px] text-black leading-[23.2px] border-l-[4px] border-[#F7DF94] max-w-[915px] sm:border-l-[8px] ">
      <h1 className="pl-[16px] max-w-[614px]">“{quote}”</h1>
    </div>
  );
}
