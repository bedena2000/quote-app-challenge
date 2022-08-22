import React from 'react';

// Routing
import { Link } from 'react-router-dom';

// Components
import QuoteText from '../components/QuoteText';

// Icons
import { BiArrowBack } from 'react-icons/bi';

export default function AuthorQuotes() {
  return (
    <div className="pt-[20px] px-[15px]">
      <div className="max-w-[915px] mx-auto mb-[50px] flex items-center justify-between">
        <div className="text-[24px] text-[#333333] leading-[42.26px] font-bold">
          Bill Gates
        </div>
        <Link to="/" className="bg-white hover:bg-slate-400 transition ease-in delay-150 p-[10px]">
          <BiArrowBack />
        </Link>
      </div>
      <div className="flex flex-col gap-[30px]">
        <QuoteText />
        <QuoteText />
        <QuoteText />
        <QuoteText />
        <QuoteText />
      </div>
    </div>
  );
}
