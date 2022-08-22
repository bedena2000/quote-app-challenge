import React, { useEffect } from 'react';

// Component
import QuoteText from './QuoteText';
import Author from './Author';

const Quote = () => {
  
  return (
    <div className="px-[15px]">
      <QuoteText />
      <Author />
    </div>
  );
};

export default Quote;
